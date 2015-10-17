/**
 * Created by Maxim on 16.10.2015.
 */
'use strict';

$(document).ready(function() {
    init();
});

function init() {
    $('#contactForm').submit(function(event) {
        processRegistration(this);
        event.preventDefault();
    });
}

function processRegistration(form) {
    var data = getRegistrationFormData();
    var errors = validaRegistrationData(data);

    $('.help-block', $(form)).text('');

    if (errors) {
        highlightErrors(form, errors);
    } else {
        console.log('DATA IS VALID', data);
        alert('SUCCESS');
    }
}

function getRegistrationFormData() {
    var formData = {
        name:       $('#name').val(),
        email:      $('#email').val(),
        phone:      $('#phone').val(),
        message:    $('#message').val()

    };

    return formData;
}

function validaRegistrationData(formData) {
    var validationRules = {
        name: function(value) {
            if (!value) {
                return 'Please enter your name.';
            }
        },
        email: function(value) {
            if (!value) {
                return 'Please enter your email address.';
            }
        },
        phone: function(value) {
            if (!value) {
                return 'Please enter your phone number.';
            }
        },
        message: function(value) {
            if (!value) {
                return 'Please enter a message.';
            }

        }
    };

    var errors = validateData(validationRules, formData);


    return errors;
}

function highlightErrors(form, errors) {
    var $form = $(form);

    for (var field in errors) {
        var fieldError = errors[field];
        $('.help-block[data-error-for=' + field + ']', $form).text(fieldError);
    }
}

function validateData(validationRules, data) {
    var errors = {};

    for (var field in data) {
        var value = data[field];
        var fieldError = validationRules[field](value);

        if (fieldError) {
            errors[field] = fieldError;
        }
    }

    if ( Object.keys(errors).length ) {
        return errors;
    } else {
        return;
    }
}
