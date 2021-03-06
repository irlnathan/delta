/**
 * Create user form
 * @author Lucas <lucas@lucas.ninja>
 */

var userForm = (function (window, document, undefined) {
  'use strict';

  var userForm = {};

  userForm.init = function () {
    this.register();
  };

  userForm.register = function () {

    var form = $('.register-user-form');

    $(form).submit(function (event) {
      event.preventDefault();

      var name = $('.name-field').val(),
        email = $('.email-field').val()

      var info = {
        "name": name,
        "email": email
      };

      // Ajax call
      var ajaxCall = $.ajax({
        type: 'POST',
        url: 'home/register',
        data: JSON.stringify(info),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json'
      });

      ajaxCall.done(function () {
        console.log('Cool!!');
      });

      ajaxCall.fail(function (err) {
        console.log('Noooo!! ' + err);
      });

      ajaxCall.always(function () {
        console.log('Finish!!');
      });


    });

  };

  return userForm.init();

})(window, document);