!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(28)},,,function(e,t){"use strict";t.__esModule=!0,t["default"]=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var r=n(5),o=i(r);t["default"]=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,o["default"])(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}()},function(e,t,n){e.exports={"default":n(6),__esModule:!0}},function(e,t,n){n(7);var i=n(10).Object;e.exports=function(e,t,n){return i.defineProperty(e,t,n)}},function(e,t,n){var i=n(8);i(i.S+i.F*!n(18),"Object",{defineProperty:n(14).f})},function(e,t,n){var i=n(9),r=n(10),o=n(11),a=n(13),s="prototype",l=function(e,t,n){var c,u,f,p=e&l.F,d=e&l.G,v=e&l.S,h=e&l.P,m=e&l.B,w=e&l.W,k=d?r:r[t]||(r[t]={}),g=k[s],$=d?i:v?i[t]:(i[t]||{})[s];d&&(n=t);for(c in n)u=!p&&$&&void 0!==$[c],u&&c in k||(f=u?$[c]:n[c],k[c]=d&&"function"!=typeof $[c]?n[c]:m&&u?o(f,i):w&&$[c]==f?function(e){var t=function(t,n,i){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,i)}return e.apply(this,arguments)};return t[s]=e[s],t}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((k.virtual||(k.virtual={}))[c]=f,e&l.R&&g&&!g[c]&&a(g,c,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.2.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var i=n(12);e.exports=function(e,t,n){if(i(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var i=n(14),r=n(22);e.exports=n(18)?function(e,t,n){return i.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var i=n(15),r=n(17),o=n(21),a=Object.defineProperty;t.f=n(18)?Object.defineProperty:function(e,t,n){if(i(e),t=o(t,!0),i(n),r)try{return a(e,t,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var i=n(16);e.exports=function(e){if(!i(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(18)&&!n(19)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(19)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,n){var i=n(16),r=n(9).document,o=i(r)&&i(r.createElement);e.exports=function(e){return o?r.createElement(e):{}}},function(e,t,n){var i=n(16);e.exports=function(e,t){if(!i(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!i(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!i(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},,,,,,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var r=n(29),o=i(r),a=n(30),s=i(a),l=n(31),c=i(l),u=n(32),f=i(u);$(function(){s["default"].plugin(".js-link-target"),c["default"].plugin(".js-notification-list"),f["default"].plugin("[markdownpreview]"),o["default"].plugin(".js-notif-commercial");var e=$('[data-type="date"]');e.length&&e.datetimepicker({useCurrent:!1,pickTime:!1})})},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=i(r),a=n(4),s=i(a),l=function(){function e(t){(0,o["default"])(this,e),this.$root=$(t),this.locals=this._getDom(),this.uniqueKey="notifiction",this._isShowed()||this.$root.slideDown(),this._assignEvents()}return(0,s["default"])(e,[{key:"_getDom",value:function(){var e=this.$root;return{$list:e.find("[data-filter-list]"),$items:e.find("[data-filter-text]")}}},{key:"_assignEvents",value:function(){this.$root.on("click","[data-notif]",this._onClickBtn.bind(this))}},{key:"_onClickBtn",value:function(e){e.preventDefault();var t=this,n=$(e.currentTarget),i=n.attr("href");t._sendIsShowed(i).done(function(){t.$root.addClass("b-notification_state_thank"),setTimeout(function(){t.hide()},3e3)})}},{key:"_isShowed",value:function(){var e=localStorage.getItem(this.uniqueKey);return e&&"showed"==e}},{key:"_sendIsShowed",value:function(e){var t=this,n=$.Deferred();return $.post(e,function(){localStorage.setItem(t.uniqueKey,"showed"),n.resolve()}),n.promise()}},{key:"hide",value:function(){this.$root.slideUp()}}],[{key:"plugin",value:function(t){var n=$(t);if(n.length)return n.each(function(t,n){var i=$(n),r=i.data("widget");r||(r=new e(n),i.data("widget",r))})}}]),e}();t["default"]=l},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=i(r),a=n(4),s=i(a),l=function(){function e(t){(0,o["default"])(this,e),this.$root=$(t),this._assignEvents()}return(0,s["default"])(e,[{key:"_assignEvents",value:function(){this.$root.on("click",this._onClickLink.bind(this))}},{key:"_onClickLink",value:function(e){var t=$(e.currentTarget),n=t.data("target");return this._isTargetValid(n)?(this.scrollToTarget("#"+n),void e.preventDefault()):!1}},{key:"_isTargetValid",value:function(e){var t=!0;return e||(console.log("There is no data-target attribute with id-name for this link"),t=!1),$("#"+e).length||(console.log("There is no element with such id name"),t=!1),t}},{key:"scrollToTarget",value:function(e){var t=$(e);return t.length?void $("html, body").animate({scrollTop:t.offset().top},400):!1}}],[{key:"plugin",value:function(t){var n=$(t);if(n.length)return n.each(function(t,n){var i=$(n),r=i.data("widget.scrollto");r||(r=new e(n),i.data("widget",r))})}}]),e}();t["default"]=l},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=i(r),a=n(4),s=i(a),l=function(){function e(t){(0,o["default"])(this,e);var n=this;n.$root=$(t),n.locals=n._getDom(),n._init(),n._assignEvents()}return(0,s["default"])(e,[{key:"_getDom",value:function(){var e=this.$root;return{$list:e.find("[data-notiflist-list]"),$close:e.find("[data-notiflist-close]"),$link:e.find("[data-notiflist-show]"),$load:e.find("[data-notiflist-load]"),$count:e.find("[data-notiflist-count]")}}},{key:"_init",value:function(){var e=this;e.isLoaded=!1,e.offset=0,e.isVisible=!1,e._recieveUnreadCount().done(function(t){e.setUnreadCount(t)})}},{key:"_assignEvents",value:function(){var e=this;e.$root.on("click","[data-notiflist-show], [data-notiflist-close]",e._onClickToggleShow.bind(e)).on("click","[data-notiflist-load]",e._onClickLoadNotification.bind(e))}},{key:"_onClickToggleShow",value:function(e){this.togglePopup(),this.isLoaded||(this.isLoaded=!0,this.loadNotification(this.offset)),e.preventDefault()}},{key:"_onClickLoadNotification",value:function(e){e.preventDefault(),this.loadNotification(this.offset)}},{key:"_renderNotification",value:function(e){var t=this;e.forEach(function(e){$(e.body).addClass(e.type).toggleClass("is-new",Boolean(e.unread)).data("id",e.id).appendTo(t.locals.$list)})}},{key:"_filterOnlyNew",value:function(e){return e.filter(function(e){return e.unread})}},{key:"_isHaveNotification",value:function(e){return e.length||this.offset?(e.length<5&&this.$root.addClass("b-notiflist_load_all"),!0):(this.$root.addClass("b-notiflist_empty"),!1)}},{key:"loadNotification",value:function(e){var t=this;t._recieveNotification(e).done(function(e){if(t._isHaveNotification(e)){t.offset+=e.length,t._renderNotification(e);var n=t._filterOnlyNew(e);n.length&&(t._sendViewedNewNotif(n),t.setUnreadCount(t.unreadCount-n.length))}})}},{key:"setUnreadCount",value:function(e){this.unreadCount=e>0?e:0,this.locals.$count.text(this.unreadCount),this.$root.toggleClass("b-notiflist_have_notification",Boolean(this.unreadCount))}},{key:"showPopup",value:function(){this.isVisible||(this.isVisible=!0,this.$root.addClass("b-notiflist_show"))}},{key:"hidePopup",value:function(){this.isVisible&&(this.isVisible=!1,this.$root.removeClass("b-notiflist_show"))}},{key:"togglePopup",value:function(){this.isVisible?this.hidePopup():this.showPopup()}},{key:"_recieveUnreadCount",value:function(){var e=$.Deferred(),t=jsRoutes.controllers.core.Notifications.unread().url;return $.get(t,function(t){var n=$.parseJSON(t).unread;e.resolve(n)}),e.promise()}},{key:"_recieveNotification",value:function(e){var t=$.Deferred(),n=5,i=jsRoutes.controllers.core.Notifications.list(e,n).url;return $.get(i,function(e){var n=$.parseJSON(e)[0];t.resolve(n)}),t.promise()}},{key:"_sendViewedNewNotif",value:function(e){var t=[],n=jsRoutes.controllers.core.Notifications.read().url;e.forEach(function(e){t.push(e.id)}),$.post(n,{ids:t})}}],[{key:"plugin",value:function(t){var n=$(t);if(n.length)return n.each(function(t,n){var i=$(n),r=i.data("widget.scrollto");r||(r=new e(n),i.data("widget",r))})}}]),e}();t["default"]=l},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=i(r),a=n(4),s=i(a),l=n(33),c=i(l),u=n(34),f=(i(u),function(){function e(t){return(0,o["default"])(this,e),this.$root=$(t),this.isEmailPreview=this.$root.data("markdownpreview"),this.url=jsRoutes.controllers.Utilities.markdown().url,$.fn.markItUp?(this._init(),this.locals=this._getDom(),void this._assignEvents()):void console.log("invalid dependency")}return(0,s["default"])(e,[{key:"_init",value:function(){var e='<div class="markitup__link type-write state_active">Write</div><div class="markitup__link type-preview">Preview</div> <div class="markitup__preview"></div>',t=this.$root;t.wrap('<div class="markitup__con"></div>').closest(".markitup__con").toggleClass("markitup_state_email",this.isEmailPreview),t.after(e).markItUp(c["default"])}},{key:"_getDom",value:function(){var e=this.$root.closest(".markitup__con");return{$container:e,$textarea:e.find("textarea"),$preview:e.find(".markitup__preview")}}},{key:"_assignEvents",value:function(){this.locals.$container.on("click",".markitup__link",this._onClickToggle.bind(this)).on("markdown.render","textarea",this._onUpdatePreview.bind(this))}},{key:"_onClickToggle",value:function(e){var t=$(e.currentTarget);if(e.preventDefault(),!t.hasClass("state_active")){var n=t.hasClass("type-preview");this._togglePreview(n),t.addClass("state_active").siblings().removeClass("state_active")}}},{key:"_togglePreview",value:function(e){var t=this.locals,n="markitup_state_preview";return e?void this._compileContent(t.$textarea.val()).done(function(e){t.$preview.html(e),t.$container.hasClass(n)||t.$container.addClass(n)}):void t.$container.removeClass(n)}},{key:"_onUpdatePreview",value:function(){var e=this.locals;this._compileContent(e.$textarea.val()).done(function(t){e.$preview.html(t)})}},{key:"_compileContent",value:function(e){return $.post(this.url,{data:e})}}],[{key:"plugin",value:function(t){var n=$(t);if(n.length)return n.each(function(t,n){var i=$(n),r=i.data("widget.preview.markdown");r||(r=new e(n),i.data("widget",r))})}}]),e}());t["default"]=f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={nameSpace:"markdown",previewParserPath:"~/sets/markdown/preview.php",onShiftEnter:{keepDefault:!1,openWith:"\n\n"},markupSet:[{name:"Bold",key:"B",openWith:"**",closeWith:"**"},{name:"Italic",key:"I",openWith:"_",closeWith:"_"},{separator:"---------------"},{name:"Quotes",openWith:"> "},{name:"Link",key:"L",openWith:"[",closeWith:']([![Url:!:http://]!] "[![Title]!]")',placeHolder:"Your text to link here..."},{separator:"---------------"},{name:"Bulleted List",openWith:"\n\n - "},{name:"Numeric List",openWith:"\n\n 1. "}]};t["default"]=n},function(module,exports){"use strict";!function(){$.fn.markItUp=function(settings,extraSettings){var method,params,line,selection,options,ctrlKey,shiftKey,altKey;ctrlKey=shiftKey=altKey=!1,"string"==typeof settings&&(method=settings,params=extraSettings),options={id:"",nameSpace:"",root:"",previewHandler:!1,previewInWindow:"",previewInElement:"",previewAutoRefresh:!0,previewPosition:"after",previewTemplatePath:"~/templates/preview.html",previewParser:!1,previewParserPath:"",previewParserVar:"data",resizeHandle:!0,beforeInsert:"",afterInsert:"",onEnter:{},onShiftEnter:{},onCtrlEnter:{},onTab:{},markupSet:[{}]},$.extend(options,settings,extraSettings);var uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},matched=uaMatch(navigator.userAgent),browser={};return matched.browser&&(browser[matched.browser]=!0,browser.version=matched.version),browser.chrome?browser.webkit=!0:browser.webkit&&(browser.safari=!0),this.each(function(){function localize(e,t){return t?e.replace(/("|')~\//g,"$1"+options.root):e.replace(/^~\//,options.root)}function init(){var e,t="",n="";options.id?t='id="'+options.id+'"':$$.attr("id")&&(t='id="markItUp'+$$.attr("id").substr(0,1).toUpperCase()+$$.attr("id").substr(1)+'"'),options.nameSpace&&(n='class="'+options.nameSpace+'"'),$$.wrap("<div "+n+"></div>"),$$.wrap("<div "+t+' class="markItUp"></div>'),$$.wrap('<div class="markItUpContainer"></div>'),$$.addClass("markItUpEditor"),header=$('<div class="markItUpHeader"></div>').insertBefore($$),$(dropMenus(options.markupSet)).appendTo(header),footer=$('<div class="markItUpFooter"></div>').insertAfter($$),options.resizeHandle===!0&&browser.safari!==!0&&(e=$('<div class="markItUpResizeHandle"></div>').insertAfter($$).bind("mousedown.markItUp",function(e){var t,n,i=$$.height(),r=e.clientY;t=function(e){return $$.css("height",Math.max(20,e.clientY+i-r)+"px"),!1},n=function(e){return $("html").unbind("mousemove.markItUp",t).unbind("mouseup.markItUp",n),!1},$("html").bind("mousemove.markItUp",t).bind("mouseup.markItUp",n)}),footer.append(e)),$$.bind("keydown.markItUp",keyPressed).bind("keyup",keyPressed),$$.bind("insertion.markItUp",function(e,t){t.target!==!1&&get(),textarea===$.markItUp.focused&&markup(t)}),$$.bind("focus.markItUp",function(){$.markItUp.focused=this}),options.previewInElement&&refreshPreview()}function dropMenus(markupSet){var ul=$("<ul></ul>"),i=0;return $("li:hover > ul",ul).css("display","block"),$.each(markupSet,function(){var button=this,t="",li,j,title=button.key?(button.name||"")+" [Ctrl+"+button.key+"]":button.name||"",key=button.key?'accesskey="'+button.key+'"':"";if(button.separator)li=$('<li class="markItUpSeparator">'+(button.separator||"")+"</li>").appendTo(ul);else{for(i++,j=levels.length-1;j>=0;j--)t+=levels[j]+"-";li=$('<li class="markItUpButton markItUpButton'+t+i+" "+(button.className||"")+'"><a href="" '+key+' title="'+title+'">'+(button.name||"")+"</a></li>").bind("contextmenu.markItUp",function(){return!1}).bind("click.markItUp",function(e){e.preventDefault()}).bind("focusin.markItUp",function(){$$.focus()}).bind("mouseup",function(){return button.call&&eval(button.call)(),setTimeout(function(){markup(button)},1),!1}).bind("mouseenter.markItUp",function(){$("> ul",this).show(),$(document).one("click",function(){$("ul ul",header).hide()})}).bind("mouseleave.markItUp",function(){$("> ul",this).hide()}).appendTo(ul),button.dropMenu&&(levels.push(i),$(li).addClass("markItUpDropMenu").append(dropMenus(button.dropMenu)))}}),levels.pop(),ul}function magicMarkups(e){var t;return e?(e=e.toString(),e=e.replace(/\(\!\(([\s\S]*?)\)\!\)/g,function(e,t){var n=t.split("|!|");return altKey===!0?void 0!==n[1]?n[1]:n[0]:void 0===n[1]?"":n[0]}),e=e.replace(/\[\!\[([\s\S]*?)\]\!\]/g,function(e,n){var i=n.split(":!:");return abort===!0?!1:(t=prompt(i[0],i[1]?i[1]:""),null===t&&(abort=!0),t)})):""}function prepare(e){return $.isFunction(e)&&(e=e(hash)),magicMarkups(e)}function build(e){var t,n=prepare(clicked.openWith),i=prepare(clicked.placeHolder),r=prepare(clicked.replaceWith),o=prepare(clicked.closeWith),a=prepare(clicked.openBlockWith),s=prepare(clicked.closeBlockWith),l=clicked.multiline;if(""!==r)t=n+r+o;else if(""===selection&&""!==i)t=n+i+o;else{e=e||selection;var c=[e],u=[];l===!0&&(c=e.split(/\r?\n/));for(var f=0;f<c.length;f++){line=c[f];var p;(p=line.match(/ *$/))?u.push(n+line.replace(/ *$/g,"")+o+p):u.push(n+line+o)}t=u.join("\n")}return t=a+t+s,{block:t,openBlockWith:a,openWith:n,replaceWith:r,placeHolder:i,closeWith:o,closeBlockWith:s}}function markup(e){var t,n,i,r,o,a;if(hash=clicked=e,get(),$.extend(hash,{line:"",root:options.root,textarea:textarea,selection:selection||"",caretPosition:caretPosition,ctrlKey:ctrlKey,shiftKey:shiftKey,altKey:altKey}),prepare(options.beforeInsert),prepare(clicked.beforeInsert),(ctrlKey===!0&&shiftKey===!0||e.multiline===!0)&&prepare(clicked.beforeMultiInsert),$.extend(hash,{line:1}),ctrlKey===!0&&shiftKey===!0){for(lines=selection.split(/\r?\n/),n=0,i=lines.length,r=0;i>r;r++)""!==$.trim(lines[r])?($.extend(hash,{line:++n,selection:lines[r]}),lines[r]=build(lines[r]).block):lines[r]="";o={block:lines.join("\n")},a=caretPosition,t=o.block.length+(browser.opera?i-1:0)}else ctrlKey===!0?(o=build(selection),a=caretPosition+o.openWith.length,t=o.block.length-o.openWith.length-o.closeWith.length,t-=o.block.match(/ $/)?1:0,t-=fixIeBug(o.block)):shiftKey===!0?(o=build(selection),a=caretPosition,t=o.block.length,t-=fixIeBug(o.block)):(o=build(selection),a=caretPosition+o.block.length,t=0,a-=fixIeBug(o.block));""===selection&&""===o.replaceWith&&(caretOffset+=fixOperaBug(o.block),a=caretPosition+o.openBlockWith.length+o.openWith.length,t=o.block.length-o.openBlockWith.length-o.openWith.length-o.closeWith.length-o.closeBlockWith.length,caretOffset=$$.val().substring(caretPosition,$$.val().length).length,caretOffset-=fixOperaBug($$.val().substring(0,caretPosition))),$.extend(hash,{caretPosition:caretPosition,scrollPosition:scrollPosition}),o.block!==selection&&abort===!1?(insert(o.block),set(a,t)):caretOffset=-1,get(),$.extend(hash,{line:"",selection:selection}),(ctrlKey===!0&&shiftKey===!0||e.multiline===!0)&&prepare(clicked.afterMultiInsert),prepare(clicked.afterInsert),prepare(options.afterInsert),previewWindow&&options.previewAutoRefresh&&refreshPreview(),shiftKey=altKey=ctrlKey=abort=!1}function fixOperaBug(e){return browser.opera?e.length-e.replace(/\n*/g,"").length:0}function fixIeBug(e){return browser.msie?e.length-e.replace(/\r*/g,"").length:0}function insert(e){if(document.selection){var t=document.selection.createRange();t.text=e}else textarea.value=textarea.value.substring(0,caretPosition)+e+textarea.value.substring(caretPosition+selection.length,textarea.value.length)}function set(e,t){if(textarea.createTextRange){if(browser.opera&&browser.version>=9.5&&0==t)return!1;range=textarea.createTextRange(),range.collapse(!0),range.moveStart("character",e),range.moveEnd("character",t),range.select()}else textarea.setSelectionRange&&textarea.setSelectionRange(e,e+t);textarea.scrollTop=scrollPosition,textarea.focus()}function get(){if(textarea.focus(),scrollPosition=textarea.scrollTop,document.selection)if(selection=document.selection.createRange().text,browser.msie){var e=document.selection.createRange(),t=e.duplicate();for(t.moveToElementText(textarea),caretPosition=-1;t.inRange(e);)t.moveStart("character"),caretPosition++}else caretPosition=textarea.selectionStart;else caretPosition=textarea.selectionStart,selection=textarea.value.substring(caretPosition,textarea.selectionEnd);return selection}function preview(){"function"==typeof options.previewHandler?previewWindow=!0:options.previewInElement?previewWindow=$(options.previewInElement):!previewWindow||previewWindow.closed?options.previewInWindow?(previewWindow=window.open("","preview",options.previewInWindow),$(window).unload(function(){previewWindow.close()})):(iFrame=$('<iframe class="markItUpPreviewFrame"></iframe>'),"after"==options.previewPosition?iFrame.insertAfter(footer):iFrame.insertBefore(header),previewWindow=iFrame[iFrame.length-1].contentWindow||frame[iFrame.length-1]):altKey===!0&&(iFrame?iFrame.remove():previewWindow.close(),previewWindow=iFrame=!1),options.previewAutoRefresh||refreshPreview(),options.previewInWindow&&previewWindow.focus()}function refreshPreview(){renderPreview()}function renderPreview(){if(options.previewHandler&&"function"==typeof options.previewHandler)options.previewHandler($$.val());else if(options.previewParser&&"function"==typeof options.previewParser){var e=options.previewParser($$.val());writeInPreview(localize(e,1))}else""!==options.previewParserPath?$.ajax({type:"POST",dataType:"text",global:!1,url:options.previewParserPath,data:options.previewParserVar+"="+encodeURIComponent($$.val()),success:function(e){writeInPreview(localize(e,1))}}):template||$.ajax({url:options.previewTemplatePath,dataType:"text",global:!1,success:function(e){writeInPreview(localize(e,1).replace(/<!-- content -->/g,$$.val()))}});return!1}function writeInPreview(e){if(options.previewInElement)$(options.previewInElement).html(e);else if(previewWindow&&previewWindow.document){try{sp=previewWindow.document.documentElement.scrollTop}catch(t){sp=0}previewWindow.document.open(),previewWindow.document.write(e),previewWindow.document.close(),previewWindow.document.documentElement.scrollTop=sp}}function keyPressed(e){var t;if(shiftKey=e.shiftKey,altKey=e.altKey,ctrlKey=e.altKey&&e.ctrlKey?!1:e.ctrlKey||e.metaKey,"keydown"===e.type){if(ctrlKey===!0&&(t=$('a[accesskey="'+(13==e.keyCode?"\\n":String.fromCharCode(e.keyCode))+'"]',header).parent("li"),0!==t.length))return ctrlKey=!1,setTimeout(function(){t.triggerHandler("mouseup")},1),!1;if(13===e.keyCode||10===e.keyCode)return ctrlKey===!0?(ctrlKey=!1,markup(options.onCtrlEnter),options.onCtrlEnter.keepDefault):shiftKey===!0?(shiftKey=!1,markup(options.onShiftEnter),options.onShiftEnter.keepDefault):(markup(options.onEnter),options.onEnter.keepDefault);if(9===e.keyCode)return 1==shiftKey||1==ctrlKey||1==altKey?!1:-1!==caretOffset?(get(),caretOffset=$$.val().length-caretOffset,set(caretOffset,0),caretOffset=-1,!1):(markup(options.onTab),options.onTab.keepDefault)}}function remove(){$$.unbind(".markItUp").removeClass("markItUpEditor"),$$.parent("div").parent("div.markItUp").parent("div").replaceWith($$),$$.data("markItUp",null)}var $$,textarea,levels,scrollPosition,caretPosition,caretOffset,clicked,hash,header,footer,previewWindow,template,iFrame,abort;if($$=$(this),textarea=this,levels=[],abort=!1,scrollPosition=caretPosition=0,caretOffset=-1,options.previewParserPath=localize(options.previewParserPath),options.previewTemplatePath=localize(options.previewTemplatePath),method)switch(method){case"remove":remove();break;case"insert":markup(params);break;default:$.error("Method "+method+" does not exist on jQuery.markItUp")}else init()})},$.fn.markItUpRemove=function(){return this.each(function(){$(this).markItUp("remove")})},$.markItUp=function(e){var t={target:!1};return $.extend(t,e),t.target?$(t.target).each(function(){$(this).focus(),$(this).trigger("insertion",[t])}):void $("textarea").trigger("insertion",[t])}}()}]);