/*
 * Happy Melly Teller
 * Copyright (C) 2013 - 2016, Happy Melly http://www.happymelly.com
 *
 * This file is part of the Happy Melly Teller.
 *
 * Happy Melly Teller is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Happy Melly Teller is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Happy Melly Teller.  If not, see <http://www.gnu.org/licenses/>.
 *
 * If you have questions concerning this license or the applicable additional
 * terms, you may contact by email Sergey Kotlov, sergey.kotlov@happymelly.com or
 * in writing Happy Melly One, Handelsplein 37, Rotterdam, The Netherlands, 3071 PR
 */
package controllers.core

import javax.inject.Inject

import be.objectify.deadbolt.scala.cache.HandlerCache
import be.objectify.deadbolt.scala.{ActionBuilders, DeadboltActions}
import controllers.{Files, Security, Utilities}
import models.repository.Repositories
import models.{Person, Photo}
import play.api.data.Form
import play.api.data.Forms._
import play.api.i18n.MessagesApi
import play.api.libs.json.Json
import services.TellerRuntimeEnvironment

class ProfilePhotos @Inject() (override implicit val env: TellerRuntimeEnvironment,
                               override val messagesApi: MessagesApi,
                               val repos: Repositories,
                               deadbolt: DeadboltActions, handlers: HandlerCache, actionBuilder: ActionBuilders)
  extends Security(deadbolt, handlers, actionBuilder, repos)(messagesApi, env)
    with Files {

  /**
    * Renders a screen for selecting a profile's photo
    *
    * @param id Person identifier
    */
  def choose(id: Long) = ProfileAction(id) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    repos.person.find(id) flatMap {
      case None => notFound("Person not found")
      case Some(person) =>
        val active = person.photo.id getOrElse "nophoto"
        ok(views.html.v2.person.photoSelection(id, Photo.gravatarUrl(person.email),
          routes.ProfilePhotos.photo(id).url, active))
    }
  }

  /**
    * Deletes photo of the given person
    *
    * @param id Person identifier
    */
  def delete(id: Long) = ProfileAction(id) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    repos.person.findComplete(id) flatMap {
      case None => notFound("Person not found")
      case Some(person) =>
        Person.photo(id).remove()
        repos.person.update(person.copy(photo = Photo.empty)) flatMap { _ =>
          val route = routes.People.details(id).url
          jsonOk(Json.obj("link" -> controllers.routes.Assets.at("images/add-photo.png").url))
        }
    }
  }

  /**
    * Retrieve and cache a photo of the given person
    *
    * @param id Person identifier
    */
  def photo(id: Long) = file(Person.photo(id))

  /**
    * Updates profile photo
    *
    * @param id Person identifier
    */
  def update(id: Long) = ProfileAction(id) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    val form = Form(single("type" -> nonEmptyText)).bindFromRequest
    form.fold(
      withError ⇒ jsonBadRequest("No option is provided"),
      photoType ⇒
        repos.person.findComplete(id) flatMap {
          case None => notFound("Person not found")
          case Some(person) =>
            val photo = photoType match {
              case "nophoto" ⇒ Photo.empty
              case "gravatar" ⇒ Photo(photoType, person.email)
              case _ ⇒ Photo(Some(photoType), photoUrl(id))
            }
            repos.person.update(person.copy(photo = photo)) flatMap { _ =>
              jsonSuccess("ok")
            }
        })
  }

  /**
    * Upload a new photo to Amazon
    *
    * @param id Person identifier
    */
  def upload(id: Long) = ProfileAction(id) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    uploadFile(Person.photo(id), "photo") flatMap { _ ⇒
      val route = routes.People.details(id).url
      jsonOk(Json.obj("link" -> routes.ProfilePhotos.photo(id).url))
    } recover {
      case e ⇒ BadRequest(Json.obj("message" -> e.getMessage))
    }
  }

  /**
    * Returns url to a person's photo
    *
    * @param id Person identifier
    */
  protected def photoUrl(id: Long): Option[String] = {
    val photo = Person.photo(id)
    Utilities.cdnUrl(photo.name).orElse(Some(Utilities.fullUrl(routes.ProfilePhotos.photo(id).url)))
  }
}
