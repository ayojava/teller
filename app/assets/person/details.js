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

function switchActivePhoto(object) {
    $('#choosePhotoContent').find('img').removeClass('active');
    $(object).addClass('active');
}

function updateReason() {
    var url = jsRoutes.controllers.Members.updateReason(getPersonId()).url
    $.post(url, {reason: $('#reason').val()}, null, "json").done(function(data) {
        $('#reasonDialog').modal('hide');
        $('#reasonToJoin').html(data.message);
        reloadCompletionWidget();
    }).fail(function(jqXHR, status, error) {
    });
}

function updatePhoto() {
    var url = jsRoutes.controllers.People.updatePhoto(getPersonId()).url
    var object = $('#choosePhotoContent').find('.active');
    var type = $(object).parent('div').attr('id');
    var name = "";

    var src = $(object).attr('src');
    $.post(url, { type: type }, null, "json").done(function(data) {
        $('#photoDialog').modal('hide');
        $('#photo').attr('src', src);
        reloadCompletionWidget();
    }).fail(function(jqXHR, status, error) {
    });
}

function showSelectPhotoForm() {
    $.get(jsRoutes.controllers.People.choosePhoto(getPersonId()).url, function(data) {
        $('#choosePhotoContent').html(data);
        $('#choosePhotoContent img').on('click', function(e) {
            switchActivePhoto($(this));
        });
        $('#saveLink').on('click', updatePhoto);
        setupCustomPhotoActions();
    });
}

function setupCustomPhotoActions() {
    var btnPhotoUpload = '#btnPhotoUpload';
    var btnPhotoDelete = '#btnPhotoDelete';
    $('#photoUpload').fileupload({
        dataType: 'json',
        disableImageResize: false,
        imageMaxWidth: 300,
        imageMaxHeight: 300,
        imageCrop: false,
        autoUpload: false,
        replaceFileInput: false,
        done: function (e, data) {
            $('#customPhoto').attr('src', data.result.link);
            $(btnPhotoUpload).text('Upload').hide();
        }
    }).bind('fileuploadadd', function (e, data) {
        $(btnPhotoUpload).show();
        $('#customPhoto').attr('src', URL.createObjectURL(data.files[0]));
        $('#customPhoto').addClass('photo')
        $(btnPhotoUpload).off('click');
        $(btnPhotoUpload).on('click', function(e) {
            $(btnPhotoUpload).text('Uploading...');
            data.submit();
        });
    });
    $(btnPhotoDelete).on('click', function(e) {
        $.ajax({
            type: "DELETE",
            url: $(this).data('href'),
            dataType: "json"
        }).done(function(data) {
            $('#customPhoto').
                attr('src', data.link).
                removeClass('photo').
                removeClass('active');
        });
        return false;
    });
    $(btnPhotoUpload).hide();
}

$(document).ready( function() {

    // Delete links.
    $('form.delete').submit(function() {
        return confirm('Delete this ' + $(this).attr('text') + '? You cannot undo this action.');
    });

    $('.datatables').each(function() {
        $(this).dataTable( {
            "sPaginationType": "bootstrap",
            "sDom": "<'row'<'span4'l><'span4'f>r>t<'row'<'span4'i><'span4'p>>",
            "order": [[ 0, "asc" ]],
            "bFilter": false,
            "bInfo": false,
            "bLengthChange": false,
            "bPaginate": false
        });
    });
    $('.payments').dataTable( {
        "sPaginationType": "bootstrap",
        "order": [[ 2, "desc" ]],
        "columnDefs": [
            { "orderable": false, "targets": 0 },
            { "orderable": false, "targets": 1 }
        ],
        "bFilter": false,
        "bInfo": false,
        "bLengthChange": false,
        "bPaginate": false
    });

    $('#sidemenu a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    var hash = window.location.hash.substring(1);
    if (!hash) {
        hash = 'personal-details';
    }
    $('#sidemenu a[href="#' + hash + '"]').tab('show');
    $('[data-toggle="tooltip"]').tooltip();
    $('#saveReason').on('click', updateReason);

    $('#choosePhotoLink').on('click', function(e) {
        showSelectPhotoForm();
    });

});

