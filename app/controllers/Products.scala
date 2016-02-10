/*
 * Happy Melly Teller
 * Copyright (C) 2013 - 2014, Happy Melly http://www.happymelly.com
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
 * If you have questions concerning this license or the applicable additional terms, you may contact
 * by email Sergey Kotlov, sergey.kotlov@happymelly.com or
 * in writing Happy Melly One, Handelsplein 37, Rotterdam, The Netherlands, 3071 PR
 */

package controllers

import be.objectify.deadbolt.scala.cache.HandlerCache
import be.objectify.deadbolt.scala.{ActionBuilders, DeadboltActions}
import fly.play.s3.{BucketFile, S3Exception}
import models.UserRole.Role._
import models._
import models.service.Services
import org.joda.time._
import play.api.Play.current
import play.api.cache.Cache
import play.api.data.Forms._
import play.api.data.format.Formatter
import play.api.data.validation.Constraints._
import play.api.data.{FormError, _}
import play.api.i18n.{MessagesApi, Messages}
import play.api.mvc._
import services._

import scala.concurrent.Future
import scala.io.Source

class Products @javax.inject.Inject() (override implicit val env: TellerRuntimeEnvironment,
                                       override val messagesApi: MessagesApi,
                                       val services: Services,
                                       deadbolt: DeadboltActions, handlers: HandlerCache, actionBuilder: ActionBuilders)
  extends Security(deadbolt, handlers, actionBuilder, services)(messagesApi, env) {

  val contentType = "image/jpeg"
  val encoding = "ISO-8859-1"
  val indexCall: Call = routes.Products.index()

  /**
   * Formatter used to define a form mapping for the `ProductCategory` enumeration.
   */
  implicit def categoryFormat: Formatter[ProductCategory.Value] = new Formatter[ProductCategory.Value] {

    def bind(key: String, data: Map[String, String]) = {
      try {
        data.get(key).map(ProductCategory.withName).toRight(Seq.empty)
      } catch {
        case e: NoSuchElementException ⇒ Left(Seq(FormError(key, "error.invalid")))
      }
    }

    def unbind(key: String, value: ProductCategory.Value) = Map(key -> value.toString)
  }

  val categoryMapping = of[ProductCategory.Value]

  /** HTML form mapping for creating and editing. */
  def productForm(implicit user: ActiveUser) = Form(mapping(
    "id" -> ignored(Option.empty[Long]),
    "title" -> text.verifying(nonEmpty),
    "subtitle" -> optional(text),
    "url" -> optional(text),
    "description" -> optional(text),
    "callToActionUrl" -> optional(text),
    "callToActionText" -> optional(text),
    "picture" -> optional(text),
    "category" -> optional(categoryMapping),
    "parentId" -> optional(nonEmptyText.transform(_.toLong, (l: Long) ⇒ l.toString)),
    "active" -> ignored(true),
    "created" -> ignored(DateTime.now),
    "createdBy" -> ignored(user.name),
    "updated" -> ignored(DateTime.now),
    "updatedBy" -> ignored(user.name))(Product.apply)(Product.unapply))

  /** Show all products **/
  def index = AsyncSecuredRestrictedAction(Viewer) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    services.productService.findAll flatMap { products =>
      ok(views.html.product.index(user, products))
    }
  }

  /** Add page **/
  def add = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    services.productService.findAll flatMap { products =>
      ok(views.html.product.form(user, None, None, products, productForm))
    }
  }

  /** Add form submits to this action **/
  def create = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    val form: Form[Product] = productForm.bindFromRequest
    services.productService.findAll flatMap { products =>
      form.fold(
        errors ⇒ badRequest(views.html.product.form(user, None, None, products, errors)),
        product ⇒ {
          services.productService.titleExists(product.title) flatMap {
            case true =>
              badRequest(views.html.product.form(user, None, None, products,
                form.withError("title", "constraint.product.title.exists", product.title)))
            case false =>
              request.body.asMultipartFormData.get.file("picture").map { picture ⇒
                val filename = Product.generateImageName(picture.filename)
                val source = Source.fromFile(picture.ref.file.getPath, encoding)
                val byteArray = source.toArray.map(_.toByte)
                source.close()
                S3Bucket.add(BucketFile(filename, contentType, byteArray)).map { unit ⇒
                  services.productService.insert(product.copy(picture = Some(filename)))
                  val activity = Activity.insert(user.name,
                    Activity.Predicate.Created, product.title)(services)
                  Redirect(indexCall).flashing("success" -> activity.toString)
                }.recover {
                  case S3Exception(status, code, message, originalXml) ⇒
                    BadRequest(views.html.product.form(user, None, None, products,
                      form.withError("picture", "Image cannot be temporary saved")))
                }
              }.getOrElse {
                services.productService.insert(product) flatMap { _ =>
                  val activity = Activity.insert(user.name, Activity.Predicate.Created, product.title)(services)
                  redirect(indexCall, "success" -> "New product was added")
                }
              }
          }
        })
    }
  }

  /**
   * Assign the product to a brand
   */
  def addBrand() = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒ implicit handler ⇒ implicit user ⇒

    val assignForm = Form(tuple("page" -> text, "productId" -> longNumber, "brandId" -> longNumber))
    assignForm.bindFromRequest.fold(
      errors ⇒ badRequest("brandId missing"),
      {
        case (page, productId, brandId) ⇒ {
          (for {
            p <- services.productService.find(productId)
            b <- services.brandService.find(brandId)
          } yield (p, b)) flatMap {
            case (None, _) => notFound("Product not found")
            case (_, None) => notFound("Brand not found")
            case (Some(product), Some(brand)) =>
              services.productService.addBrand(product.id.get, brand.identifier)
              val activityObject = Messages("activity.relationship.create", product.title, brand.name)
              val activity = Activity.insert(user.name, Activity.Predicate.Created, activityObject)(services)

              // Redirect to the page we came from - either the product or brand details page.
              val action: Call = if (page == "product")
                routes.Products.details(productId)
              else
                routes.Brands.details(brand.id.get)
              redirect(action, "success" -> "Product was assigned to a brand")
          }
        }
      })
  }

  /**
   * Activates/deactivates the given product
   *
   * @param id Product id
   */
  def activation(id: Long) = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    services.productService.find(id) flatMap {
      case None => jsonNotFound("Product not found")
      case Some(product) =>
        Form("active" -> boolean).bindFromRequest.fold(
          error ⇒ jsonBadRequest("'active' parameter is not found"),
          active ⇒ {
            if (active)
              services.productService.activate(id)
            else
              services.productService.deactivate(id)
            jsonSuccess("ok")
          })
    }
  }

  /**
   * Unassign the product from the brand
   */
  def deleteBrand(page: String, productId: Long, brandId: Long) = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒
    implicit handler ⇒ implicit user ⇒
      (for {
        p <- services.productService.find(productId)
        b <- services.brandService.find(brandId)
      } yield (p, b)) flatMap {
        case (None, _) => notFound("Product not found")
        case (_, None) => notFound("Brand not found")
        case (Some(product), Some(brand)) =>
          services.productService.deleteBrand(product.id.get, brandId)
          val activityObject = Messages("activity.relationship.delete", product.title, brand.name)
          val activity = Activity.insert(user.name, Activity.Predicate.Deleted, activityObject)(services)

          // Redirect to the page we came from - either the product or brand details page.
          val action: Call = if (page == "product")
            routes.Products.details(productId)
          else
            routes.Brands.details(brand.id.get)
          redirect(action, "success" -> "Product is not longer assigned to a brand")
      }
  }

  /** Delete a product **/
  def delete(id: Long) = AsyncSecuredDynamicAction(Funder, 0)  { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    services.productService.find(id) flatMap {
      case None => notFound("Product not found")
      case Some(product) ⇒
        product.picture.foreach { picture ⇒
          S3Bucket.remove(picture)
          Cache.remove(Product.cacheId(product.id.get))
        }
        services.productService.delete(id)
        val activity = Activity.insert(user.name, Activity.Predicate.Deleted, product.title)(services)
        redirect(indexCall, "success" -> "Product was deleted")
    }
  }

  /** Delete picture form submits to this action **/
  def deletePicture(id: Long) = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒
    implicit handler ⇒ implicit user ⇒
      services.productService.find(id) flatMap {
        case None => notFound("Product not found")
        case Some(product) =>
          product.picture.foreach { picture ⇒
            S3Bucket.remove(picture)
            Cache.remove(Product.cacheId(product.id.get))
          }
          services.productService.update(product.copy(picture = None))
          val activity = Activity.insert(user.name,
            Activity.Predicate.Deleted, "image from the product " + product.title)(services)
          val call: Call = routes.Products.details(id)
          redirect(call, "success" -> "Product's image was deleted")
      }
  }

  /** Details page **/
  def details(id: Long) = AsyncSecuredRestrictedAction(Viewer) { implicit request ⇒
    implicit handler ⇒ implicit user ⇒
      (for {
        p <- services.productService.find(id)
        b <- services.productService.brands(id)
        d <- services.productService.findDerivatives(id)
        bs <- services.brandService.findAllWithCoordinator
        o <- services.orgService.findActive
        c <- services.contributionService.contributors(id)
      } yield (p, b, d, bs, o, c)) flatMap {
        case (None, _, _, _, _, _) => notFound("Product not found")
        case (Some(product), brand, derivatives, brands, organisations, contributors) =>
          val view = ProductView(product, brand, contributors)
          services.personService.findAll flatMap { people =>
            ok(views.html.product.details(user, view, derivatives, None, brands, people, organisations))
          }
      }

  }

  /** Edit page **/
  def edit(id: Long) = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    services.productService.findAll flatMap { products =>
      products.find(_.id.contains(id)) match {
        case None => notFound("Product not found")
        case Some(product) =>
          ok(views.html.product.form(user, Some(id), Some(product.title), products, productForm.fill(product)))
      }
    }
  }

  /** Edit form submits to this action **/
  def update(id: Long) = AsyncSecuredDynamicAction(Funder, 0) { implicit request ⇒ implicit handler ⇒ implicit user ⇒
    services.productService.findAll flatMap { products =>
      products.find(_.id.contains(id)) match {
        case None => notFound("Product not found")
        case Some(existingProduct) =>
          val form: Form[Product] = productForm.bindFromRequest
          val title = Some(existingProduct.title)
          form.fold(
            formWithErrors ⇒ badRequest(views.html.product.form(user, Some(id), title, products, form)),
            product ⇒ {
              services.productService.isTitleTaken(product.title, id) flatMap {
                case true =>
                  badRequest(views.html.product.form(user, Some(id), title, products,
                    form.withError("title", "constraint.product.title.exists", product.title)))
                case false =>
                  request.body.asMultipartFormData.get.file("picture").map { picture ⇒
                    val filename = Product.generateImageName(picture.filename)
                    val source = Source.fromFile(picture.ref.file.getPath, encoding)
                    val byteArray = source.toArray.map(_.toByte)
                    source.close()
                    S3Bucket.add(BucketFile(filename, contentType, byteArray)).map { unit ⇒
                      services.productService.update(product.copy(id = Some(id)).copy(picture = Some(filename)))
                      Cache.remove(Product.cacheId(id))
                      existingProduct.picture.map { oldPicture ⇒
                        S3Bucket.remove(oldPicture)
                      }
                      val activity = Activity.insert(user.name,
                        Activity.Predicate.Updated, product.title)(services)
                      Redirect(routes.Products.details(id)).flashing("success" -> "Product was updated")
                    }.recover {
                      case S3Exception(status, code, message, originalXml) ⇒
                        BadRequest(views.html.product.form(user, Some(id), title, products,
                          form.withError("picture", "Image cannot be temporary saved. Please, try again later.")))
                    }
                  }.getOrElse {
                    services.productService.update(product.copy(id = Some(id)).copy(picture = existingProduct.picture))
                    val activity = Activity.insert(user.name,
                      Activity.Predicate.Updated, product.title)(services)
                    Future.successful(Redirect(routes.Products.details(id)).flashing("success" -> "Product was updated"))
                  }
              }
            })
      }
    }
  }

  /**
   * Retrieve and cache a product's image
   */
  def picture(id: Long) = Action.async {
    val cached = Cache.getAs[Array[Byte]](Product.cacheId(id))
    if (cached.isDefined) {
      Future.successful(Ok(cached.get).as(contentType))
    } else {
      val empty = Array[Byte]()
      val image: Future[Array[Byte]] = services.productService.find(id) flatMap {
        case None => Future.successful(empty)
        case Some(entry) =>
          entry.picture.map { picture ⇒
            val result = S3Bucket.get(entry.picture.get)
            result.map {
              case BucketFile(name, contentType, content, acl, headers) ⇒ content
            }.recover {
              case S3Exception(status, code, message, originalXml) ⇒ empty
            }
          } getOrElse Future.successful(empty)
      }
      image.map {
        case value ⇒
          Cache.set(Product.cacheId(id), value)
          Ok(value).as(contentType)
      }
    }
  }

}

object Products {

  /**
    * Returns url to a product's picture
    *
    * @param product Product
    */
  def pictureUrl(product: Product): Option[String] = {
    product.picture.map { path =>
      Utilities.cdnUrl(path).orElse(Some(Utilities.fullUrl(routes.Products.picture(product.id.get).url)))
    } getOrElse None
  }
}

