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
 * If you have questions concerning this license or the applicable additional terms, you may contact
 * by email Sergey Kotlov, sergey.kotlov@happymelly.com or
 * in writing Happy Melly One, Handelsplein 37, Rotterdam, The Netherlands, 3071 PR
 */

function LoginForm(selector, options){
    var self = this;

    self.$root = $(selector);
    self.locals = {
        $email: self.$root.find('[data-login-email]'),
        $password: self.$root.find('[data-login-password]'),
        $resetLink: self.$root.find('[data-login-reset]'),
        $enterLink: self.$root.find('[data-login-enter]'),
        $submit: self.$root.find('[data-login-submit]')
    };

    self.assignEvents();
}

LoginForm.prototype.assignEvents = function(){
    var self = this;

    self.$root
        .on('click', '[data-login-reset]', function(e){
            e.preventDefault();
            self.sendRequest();
        })
        .on('click', '[data-login-enter]', function(e){
            e.preventDefault();
            self.activateLoginForm();
        })
        .on('keyup', '[data-login-input], [data-login-password]', function(){
            self.toggleShowLink();
        })
};

LoginForm.prototype.toggleShowLink = function(){
    var self = this,
        locals = self.locals,
        isShowRemind = null;

    isShowRemind = (locals.$email.val().length > 0 && locals.$password.val().length == 0);
    self.$root.toggleClass('b-login_remind_show', isShowRemind);
};

LoginForm.prototype.sendRequest = function(){
    var self = this,
        locals = self.locals;

    $.post(
        locals.$resetLink.attr('href'),
        {'email': locals.$email.val()},
        function (data) {
            self.$root.addClass('b-login_remind_disabled');
            locals.$submit.attr('disabled', 'disabled');
            success(data.message)
        },
        "json"
    );
};

LoginForm.prototype.activateLoginForm = function(){
    this.$root.removeClass('b-login_remind_disabled');
    this.locals.$submit.removeAttr('disabled');
    this.locals.$password.trigger('focus');
};

$(document).ready( function() {
    new LoginForm('.js-login-form');
});