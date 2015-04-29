/*
 * Happy Melly Teller
 * Copyright (C) 2013 - 2015, Happy Melly http://www.happymelly.com
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

package controllers.acceptance

import controllers.EventTypes
import helpers.BrandHelper
import integration.PlayAppSpec
import models.brand.EventType
import models.service.BrandService
import models.service.brand.EventTypeService
import org.scalamock.specs2.IsolatedMockFactory
import play.api.libs.json.JsObject
import play.api.mvc.AnyContentAsEmpty
import play.api.test._
import stubs.{ FakeServices, FakeUserIdentity }

import scala.concurrent.Future

class EventTypesSpec extends PlayAppSpec with IsolatedMockFactory {

  class TestEventTypes extends EventTypes with FakeServices

  override def is = s2"""

  'Update' action should
    be accessible to Editors                                                $e1
    not be accessible to Viewers                                            $e2
    return JSON with error if event type is not found                       $e3
    return JSON with error if a brand of the given event type is not found  $e8
    return JSON with error if event type with such name already exists      $e4
    return JSON if event type is successfully updated                       $e5
  'Create' action should
    be accessible to Editors                                                $e6
    not be accessible to Viewers                                            $e7
    return JSON with error if a brand of the given event type is not found  $e9
    return JSON with error if event type with such name already exists      $e10

  """

  val controller = new TestEventTypes()
  val eventTypeService = mock[EventTypeService]
  val brandService = mock[BrandService]
  controller.brandService_=(brandService)
  controller.eventTypeService_=(eventTypeService)
  val brand = BrandHelper.one
  val eventType = EventType(Some(1L), 1L, "Test", Some("test type"), 16, false)

  def e1 = {
    val req = prepareSecuredGetRequest(FakeUserIdentity.editor, "/")

    val result = controller.update(1L).apply(req)
    status(result) must equalTo(BAD_REQUEST)
  }

  def e2 = {
    val req = prepareSecuredGetRequest(FakeUserIdentity.viewer, "/update/2")
    val result = controller.update(2L).apply(req)

    status(result) must equalTo(SEE_OTHER)
  }

  def e3 = {
    class AnotherTestEventTypes extends TestEventTypes {
      override def validateUpdatedEventType(id: Long, value: EventType): Option[(Int, String)] =
        Some((BAD_REQUEST, "error.eventType.notFound"))
    }
    val controller = new AnotherTestEventTypes
    (brandService.find(_: Long)) expects 1L returning Some(brand)
    controller.brandService_=(brandService)

    val req = withPostData(editorPostRequest)

    val res = controller.update(1L).apply(req)
    status(res) must equalTo(BAD_REQUEST)
    val data = contentAsJson(res).as[JsObject]
    (data \ "message").as[String] must contain("Event type is not found")
  }

  def e4 = {
    class AnotherTestEventTypes extends TestEventTypes {
      override def validateUpdatedEventType(id: Long, value: EventType): Option[(Int, String)] =
        Some((BAD_REQUEST, "error.eventType.nameExists"))
    }
    (brandService.find(_: Long)).expects(1L).returning(Some(brand))

    val req = withPostData(editorPostRequest)
    val controller = new AnotherTestEventTypes
    controller.brandService_=(brandService)

    val res = controller.update(3L).apply(req)
    status(res) must equalTo(BAD_REQUEST)
    val data = contentAsJson(res).as[JsObject]
    (data \ "message").as[String] must contain("already exists")
  }

  def e5 = {
    val req = withPostData(editorPostRequest)
    (eventTypeService.find _).expects(1L).returning(Some(eventType))
    (eventTypeService.findByBrand _).expects(1L).returning(List())
    (eventTypeService.update _).expects(*)
    (brandService.find(_: Long)).expects(1L).returning(Some(brand))

    val res = controller.update(1L).apply(req)
    status(res) must equalTo(OK)
    contentAsString(res) must contain("success")
    contentAsJson(res) must beAnInstanceOf[JsObject]
  }

  def e6 = {
    (brandService.find(_: Long)).expects(1L).returning(Some(brand))
    val req = prepareSecuredGetRequest(FakeUserIdentity.editor, "/")
    val result = controller.create(1L).apply(req)
    status(result) must equalTo(BAD_REQUEST)
  }

  def e7 = {
    val req = prepareSecuredGetRequest(FakeUserIdentity.viewer, "/")
    val result = controller.create(1L).apply(req)
    status(result) must equalTo(SEE_OTHER)
  }

  def e8 = {
    (brandService.find(_: Long)) expects 1L returning None

    val req = withPostData(editorPostRequest)

    val res = controller.update(1L).apply(req)
    status(res) must equalTo(BAD_REQUEST)
    val data = contentAsJson(res).as[JsObject]
    (data \ "message").as[String] must contain("Brand is not found")
  }

  def e9 = {
    (brandService.find(_: Long)) expects 1L returning None
    val req = withPostData(editorPostRequest)

    val res = controller.create(1L).apply(req)
    status(res) must equalTo(SEE_OTHER)
    flash(res).get("error") must_== Some("Brand is not found")
  }

  def e10 = {
    class AnotherTestEventTypes extends TestEventTypes {
      override def validateEventType(brandId: Long,
        value: EventType): Option[(String, String)] =
        Some(("name", "error.eventType.nameExists"))
    }
    (brandService.find(_: Long)).expects(1L).returning(Some(brand))

    val req = withPostData(editorPostRequest)
    val controller = new AnotherTestEventTypes
    controller.brandService_=(brandService)

    val res = controller.create(1L).apply(req)
    status(res) must equalTo(BAD_REQUEST)
    contentAsString(res) must contain("already exists")
  }

  private def withPostData(request: FakeRequest[AnyContentAsEmpty.type]) =
    request.withFormUrlEncodedBody(("id", "1"), ("brandId", "1"),
      ("name", "Test"), ("maxhours", "16"))

  private def editorPostRequest =
    prepareSecuredPostRequest(FakeUserIdentity.editor, "/")
}
