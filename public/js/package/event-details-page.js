!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(41)},,,function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var a=n(5),i=r(a);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={"default":n(6),__esModule:!0}},function(t,e,n){n(7);var r=n(10).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(8);r(r.S+r.F*!n(18),"Object",{defineProperty:n(14).f})},function(t,e,n){var r=n(9),a=n(10),i=n(11),o=n(13),l="prototype",s=function(t,e,n){var u,c,f,d=t&s.F,v=t&s.G,h=t&s.S,p=t&s.P,m=t&s.B,_=t&s.W,$=v?a:a[e]||(a[e]={}),y=$[l],k=v?r:h?r[e]:(r[e]||{})[l];v&&(n=e);for(u in n)c=!d&&k&&void 0!==k[u],c&&u in $||(f=c?k[u]:n[u],$[u]=v&&"function"!=typeof k[u]?n[u]:m&&c?i(f,r):_&&k[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[l]=t[l],e}(f):p&&"function"==typeof f?i(Function.call,f):f,p&&(($.virtual||($.virtual={}))[u]=f,t&s.R&&y&&!y[u]&&o(y,u,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.2.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(14),a=n(22);t.exports=n(18)?function(t,e,n){return r.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(15),a=n(17),i=n(21),o=Object.defineProperty;e.f=n(18)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),a)try{return o(t,e,n)}catch(l){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(16);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(18)&&!n(19)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(16),a=n(9).document,i=r(a)&&r(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},function(t,e,n){var r=n(16);t.exports=function(t,e){if(!r(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!r(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!r(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),l=r(o),s=function(){function t(e){(0,i["default"])(this,t),this.$controls=e,this.arrErrors=[],this._assignEvents()}return(0,l["default"])(t,[{key:"_assignEvents",value:function(){var t=this;this.$controls.on("input change",function(e){var n=$(e.currentTarget);t._validateImmediate(n),t._removeError(n)})}},{key:"_validateImmediate",value:function(t){t.hasClass("type-numeric")&&t.val(t.val().replace(/[^\d]+/g,""))}},{key:"isValidInputs",value:function(){var t=this,e=this.$controls,n=0;return e.each(function(e,r){var a=$(r);t._isValidInput(a)||(n+=1)}),Boolean(!n)}},{key:"_isValidInput",value:function(t){var e=$.trim(t.val());return e||t.hasClass("type-optional")?t.hasClass("type-email")&&!this._isValidEmail(e)?(this._setError(t,"Email is not valid"),!1):!0:(this._setError(t,"Empty"),!1)}},{key:"_isValidEmail",value:function(t){var e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)}},{key:"_setError",value:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?!0:arguments[2],r=t.parent(),a=r.find(".b-error");a.length||(r.addClass("b-error_show"),n&&$('<div class="b-error" />').text(e).appendTo(r),this.arrErrors.push({name:t.attr("name"),error:e}))}},{key:"_removeError",value:function(t){var e=t.parent();e.removeClass("b-error_show").find(".b-error").remove(),this.arrErrors=this.arrErrors.filter(function(e){return e.name!==t.attr("name")})}},{key:"setErrors",value:function(t){var e=this,n=arguments.length<=1||void 0===arguments[1]?!0:arguments[1];t.forEach(function(t){var r=e.$controls.filter('[name="'+t.name+'"]').first();r.length&&e._setError(r,t.error,n)})}},{key:"getErrorsText",value:function(t){var e=t||this.arrErrors,n="";return e.forEach(function(t){var e=t.name[0].toUpperCase()+t.name.substr(1);n+=e+": "+t.error+". "}),n}},{key:"getErrorsFull",value:function(t){var e=this,n=t||this.arrErrors,r=($("body"),"");return n.forEach(function(t){var n=e.$controls.filter('[name="'+t.name+'"]').first(),a=n.length?n.attr("title"):t.name;r+="<b>"+a+"</b>: "+t.error+".  <br><br>"}),r}},{key:"getFormData",value:function(){var t={};return this.$controls.map(function(e,n){var r=$(n),a=r.attr("name");a&&(t[a]=r.val())}),t}},{key:"removeErrors",value:function(){var t=this;this.$controls.each(function(e,n){var r=$(n);t._removeError(r)})}},{key:"getFormData",value:function(){var t={};return this.$controls.map(function(e,n){var r=$(n),a=r.attr("name");a&&(t[a]=r.val())}),t}},{key:"clearForm",value:function(){this.$controls.each(function(t,e){var n=$(e);n.attr("disabled")||n.val("")})}}]),t}();e["default"]=s},,,,,,,,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),l=r(o),s=function(){function t(e){(0,i["default"])(this,t),this.$root=$(e),this.locals=this._getDom(),this.$confirmDialog=null,this._assignEvents()}return(0,l["default"])(t,[{key:"_getDom",value:function(){return{$confirm:this.$root.find("[data-event-confirm]"),$cancel:this.$root.find("[data-event-cancel]")}}},{key:"_assignEvents",value:function(){this.$root.on("click","[data-event-confirm]",this._onClickConfirm.bind(this)).on("click","[data-event-cancel]",this._onClickCancel.bind(this)).on("click","#eventCancelButton",this._onClickAcceptCancel.bind(this))}},{key:"_onClickConfirm",value:function(t){t.preventDefault();var e=this,n=e.locals.$confirm.data("id");e._sendConfirm(n).done(function(){e.locals.$confirm.addClass("disabled").text("Confirmed").off("click"),success("Event was successfully confirmed")})}},{key:"_onClickCancel",value:function(t){t.preventDefault();var e=this,n=e.locals.$cancel.data("id");e._sendCancel(n).done(function(t){e.$confirmDialog=e._createDialog(t),e.$confirmDialog.modal("show")})}},{key:"_onClickAcceptCancel",value:function(t){t.preventDefault();var e=this,n=$("#cancelForm").serialize(),r=e.locals.$cancel.data("id");e._sendAcceptCancel(n,r).done(function(){e.$confirmDialog.on("hidden.bs.modal",function(){App.events.pub("hmt.event.cancel")}).modal("hide"),success("Event was successfully canceled")})}},{key:"_createDialog",value:function(t){var e="#cancelDialog",n=void 0;return $(e).remove(),n=$('<div id="'+e+'" class="b-modal modal fade" tabindex="-1">').attr("role","dialog").attr("aria-hidden","true").append(t),n.appendTo(this.$root),n}},{key:"_sendConfirm",value:function(t){var e=jsRoutes.controllers.cm.Events.confirm(t).url;return $.post(e,{})}},{key:"_sendCancel",value:function(t){var e=jsRoutes.controllers.cm.Events.reason(t).url;return $.get(e,{})}},{key:"_sendAcceptCancel",value:function(t,e){var n=jsRoutes.controllers.cm.Events.cancel(e).url;return $.post(n,t)}}],[{key:"plugin",value:function(e){var n=$(e);if(n.length)return n.each(function(e,n){var r=$(n),a=r.data("hmt.event.block");a||(a=new t(n),r.data("widget",a))})}}]),t}();e["default"]=s},,,,,,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var a=n(35),i=r(a),o=n(42),l=r(o),s=n(43),u=r(s),c=n(44),f=r(c);$(function(){i["default"].plugin(".js-event-controls"),u["default"].plugin(".js-request-evaluation"),l["default"].plugin(".js-clipboard"),f["default"].plugin(".js-modify-email"),App.events.sub("hmt.event.cancel",function(){var t=$("#brandId").val();window.location.replace(jsRoutes.controllers.cm.Events.index(t).url)})})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),l=r(o),s=function(){function t(e){return(0,i["default"])(this,t),this.root=e,this.$root=$(e),ZeroClipboard?(this.client=new ZeroClipboard(e),this.$client=$(".global-zeroclipboard-container").first(),void this._assignEvents()):void console.log("there is no zeroclipboard dependency")}return(0,l["default"])(t,[{key:"_assignEvents",value:function(){var t=this;this.client.on("aftercopy",this._onEventAfter.bind(this)),this.$client.on("mouseenter",function(){t.$client.attr("title","Copy link").tooltip("show")})}},{key:"_onEventAfter",value:function(){var t=this.$root;this.$client.tooltip("hide"),t.attr("title","Copied").tooltip("show"),setTimeout(function(){t.tooltip("hide").attr("title","")},2500)}}],[{key:"plugin",value:function(e){var n=$(e);if(n.length)return n.each(function(e,n){var r=$(n),a=r.data("widget-clipboard");a||(a=new t(n),r.data("widget",a))})}}]),t}();e["default"]=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),l=r(o),s=function(){function t(e){(0,i["default"])(this,t),this.$root=$(e),this.locals=this._getDom(),this.template=_.template($("#request-dlg-template").html()),this._checkFormValidation(),this._assignEvent()}return(0,l["default"])(t,[{key:"_getDom",value:function(){var t=this.$root;return{$listParticipants:t.find("[data-requesteval-list]"),$textarea:t.find("[data-requesteval-textarea]"),$filterLinks:t.find("[data-requesteval-filter]"),$submit:t.find("[data-requesteval-submit]")}}},{key:"_assignEvent",value:function(){var t=this;this.$root.on("change","[data-requesteval-list] input",this._checkFormValidation.bind(this)).on("input propertychange","[data-requesteval-textarea]",this._checkFormValidation.bind(this)).on("click","[data-requesteval-filter]",function(e){e.preventDefault();var n=$(e.currentTarget);t._filterParticipants(n)}),App.events.sub("hmt.requestDlg.render",this._renderCheckboxes.bind(this))}},{key:"_checkFormValidation",value:function(){var t=this.locals,e=this.$root.find("[data-requesteval-list] input"),n=!0;e.filter(":checked").length||(n=!1),/https?:/i.test(t.$textarea.val())||(n=!1),n?t.$submit.removeAttr("disabled"):t.$submit.attr("disabled","disabled")}},{key:"_renderCheckboxes",value:function(t){var e=t.table._("tr",{}),n=void 0,r=void 0;for(n=0,r=e.length;r>n;n++){var a={index:n,value:e[n].person.id,name:e[n].person.name,status:$.isPlainObject(e[n].evaluation.status)},i=this.template(a);this.locals.$listParticipants.append(i)}}},{key:"_filterParticipants",value:function(t){var e=this.$root.find("[data-requesteval-list] input"),n=t.data("requesteval-filter"),r=this.locals.$filterLinks;if(!t.hasClass("state_selected")){switch(n){case"all":e.prop("checked",!0);break;case"with":e.prop("checked",!1).filter(".have-evaluation").prop("checked",!0);break;case"without":e.prop("checked",!0).filter(".have-evaluation").prop("checked",!1);break;default:e.prop("checked",!1)}r.removeClass("state_selected"),t.addClass("state_selected"),this._checkFormValidation()}}}],[{key:"plugin",value:function(e){var n=$(e);if(n.length)return n.each(function(e,n){var r=$(n),a=r.data("hmt.events.upcoming");a||(a=new t(n),r.data("widget",a))})}}]),t}();e["default"]=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),i=r(a),o=n(4),l=r(o),s=n(23),u=r(s),c=function(){function t(e){(0,i["default"])(this,t),this.$root=$(e),this.locals=this._getDom(),this.formHelper=new u["default"](this.locals.$textarea),this.template=this.locals.$textarea.val(),this._assignEvent()}return(0,l["default"])(t,[{key:"_getDom",value:function(){var t=this.$root;return{$link:t.find("[data-emailmod-link]"),$defaultTemplate:t.find("[data-emailmod-default]"),$modal:t.find("[data-emailmod-dlg]"),$form:t.find("[data-emailmod-form]"),$textarea:t.find("[data-emailmod-textarea]"),$cancel:t.find("[data-emailmod-cancel]")}}},{key:"_assignEvent",value:function(){var t=this;this.$root.on("click","[data-emailmod-link]",this._onClickShowModal.bind(this)).on("click","[data-emailmod-mark]",this._onClickUseTemplate.bind(this)).on("hide.bs.modal",function(e){e.stopPropagation(),t._onCloseModal()}),this.locals.$form.on("submit",this._onSubmitForm.bind(this))}},{key:"_onClickShowModal",value:function(t){t.preventDefault(),this.locals.$modal.modal("show")}},{key:"_onClickUseTemplate",value:function(t){t.preventDefault();var e=this.locals;e.$textarea.val(e.$defaultTemplate.text())}},{key:"_onCloseModal",value:function(){this.locals.$textarea.val(this.template),this.formHelper.removeErrors()}},{key:"_onSubmitForm",value:function(t){t.preventDefault();var e=this,n=this.locals;if(e.formHelper.isValidInputs()){var r=e.formHelper.getFormData();e._sendEmailContent(r).done(function(){e.template=n.$textarea.val(),n.$modal.modal("hide"),success("Email is modified")}).fail(function(t){var n=$.parseJSON(t.responseText).data;n.errors&&e.formHelper.setErrors(n.errors)})}}},{key:"_sendEmailContent",value:function(t){var e=this.locals.$form.attr("action");return $.post(e,t)}}],[{key:"plugin",value:function(e){var n=$(e);if(n.length)return n.each(function(e,n){var r=$(n),a=r.data("hmt.events.modify_email");a||(a=new t(n),r.data("widget",a))})}}]),t}();e["default"]=c}]);