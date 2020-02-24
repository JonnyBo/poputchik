function refreshArrivals() {
    $('#refresh_jqDepartures').click();
    $('#refresh_jqArrivals').click();
}

function daConnect(dRowId, aRowId) {
    var url = '/site/setconnect';
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'did':dRowId, 'aid':aRowId},
        success: function (result) {
            var modalContainer = $('#my-modal');
            var modalBody = modalContainer.find('.modal-body');
            //var insidemodalBody = modalContainer.find('.gb-user-form');
            $('button.connect').attr('disabled', 'disable');
            if (result == 'true') {
                refreshArrivals();
            }
            else {
                modalBody.html(result).hide().fadeIn();
            }
        }
    });
}

function daDisConnect(dRowId, aRowId) {
    var url = '/site/disconnect';
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'did':dRowId, 'aid':aRowId},
        success: function (result) {
            var modalContainer = $('#my-modal');
            var modalBody = modalContainer.find('.modal-body');
            //var insidemodalBody = modalContainer.find('.gb-user-form');
            $('button.connect').attr('disabled', 'disable');
            if (result == 'true') {
                refreshArrivals();
            }
            else {
                modalBody.html(result).hide().fadeIn();
            }
        }
    });
}

function openEditOrder(id) {
    var url = '/site/editorder';
    var modalContainer = $('#my-modal');
    var modalBody = modalContainer.find('.modal-body');
    modalContainer.modal({show:true});
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (data) {
            $('.modal-body').html(data);
            modalContainer.modal({show:true});
        }
    });
}

function openSetDriver(id) {
    var url = '/site/setdriver';
    var modalContainer = $('#my-modal');
    var modalBody = modalContainer.find('.modal-body');
    modalContainer.modal({show:true});
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (data) {
            $('.modal-body').html(data);
            modalContainer.modal({show:true});
        }
    });
}

function clearDriver(id) {
    var url = '/site/cleardriver';
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (result) {
            var modalContainer = $('#my-modal');
            var modalBody = modalContainer.find('.modal-body');
            //var insidemodalBody = modalContainer.find('.gb-user-form');
            $('button.clear-driver').attr('disabled', 'disable');
            if (result == 'true') {
                refreshArrivals();
            }
            else {
                modalBody.html(result).hide().fadeIn();
            }
        }
    });
}

function openEditDriver(id) {
    var url = '/drivers/editdriver';
    var modalContainer = $('#my-modal');
    var modalBody = modalContainer.find('.modal-body');
    modalContainer.modal({show:true});
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (data) {
            $('.modal-body').html(data);
            modalContainer.modal({show:true});
        }
    });
}

function openEditClient(id) {
    var url = '/clients/editclient';
    var modalContainer = $('#my-modal');
    var modalBody = modalContainer.find('.modal-body');
    modalContainer.modal({show:true});
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (data) {
            $('.modal-body').html(data);
            modalContainer.modal({show:true});
        }
    });
}

function openDriverOrder(id) {
    var url = '/departures-arrivals/driverorder';
    var modalContainer = $('#my-modal');
    var modalBody = modalContainer.find('.modal-body');
    modalContainer.modal({show:true});
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (data) {
            $('.modal-body').html(data);
            modalContainer.modal({show:true});
        }
    });
}

function openMyOrder(id) {
    var url = '/departures-arrivals/myorder';
    var modalContainer = $('#my-modal');
    var modalBody = modalContainer.find('.modal-body');
    modalContainer.modal({show:true});
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (data) {
            $('.modal-body').html(data);
            modalContainer.modal({show:true});
        }
    });
}

function delMyOrder(id) {
    var url = '/departures-arrivals/delmyorder';
    //var modalContainer = $('#my-modal');
    //var modalBody = modalContainer.find('.modal-body');
    //modalContainer.modal({show:true});
    $.ajax({
        url: url,
        async: true,
        type: "POST",
        data: {'id':id},
        success: function (data) {
            //$('.modal-body').html(data);
            //modalContainer.modal({show:true});
            window.location.reload();
        }
    });
}

$(document).ready(function () {

    $('span.kv-field-seperator').text('до');
    $('.ui-pg-table').hide();
    $('.ui-paging-info').hide();

    $('.new-client').click(function(event){ // нажатие на кнопку - выпадает модальное окно
        event.preventDefault();
        var url = '/clients/newclient';
        var clickedbtn = $(this);
        var modalContainer = $('#my-modal');
        var modalBody = modalContainer.find('.modal-body');
        modalContainer.modal({show:true});
        $.ajax({
            url: url,
            async: true,
            type: "POST",
            success: function (data) {
                $('.modal-body').html(data);
                modalContainer.modal({show:true});
            }
        });
    });
    $('.new-driver').click(function(event){ // нажатие на кнопку - выпадает модальное окно
        event.preventDefault();
        var url = '/drivers/newdriver';
        var clickedbtn = $(this);
        var modalContainer = $('#my-modal');
        var modalBody = modalContainer.find('.modal-body');
        modalContainer.modal({show:true});
        $.ajax({
            url: url,
            async: true,
            type: "POST",
            success: function (data) {
                $('.modal-body').html(data);
                modalContainer.modal({show:true});
            }
        });
    });
    $('.new-order').click(function(event){ // нажатие на кнопку - выпадает модальное окно
        event.preventDefault();
        var url = '/site/neworder';
        var clickedbtn = $(this);
        var table = $('input[name=table]:checked').val();

        var modalContainer = $('#my-modal');
        var modalBody = modalContainer.find('.modal-body');
        modalContainer.modal({show:true});
        $.ajax({
            url: url,
            type: "POST",
            async: true,
            data: {'table':table},
            success: function (data) {
                $('.modal-body').html(data);
                modalContainer.modal({show:true});
            }
        });
    });
    $('.new-app').click(function(event){ // нажатие на кнопку - выпадает модальное окно
        event.preventDefault();
        var url = '/site/newapp';
        var clickedbtn = $(this);
        //var UserID = clickedbtn.data("userid");

        var modalContainer = $('#my-modal');
        var modalBody = modalContainer.find('.modal-body');
        modalContainer.modal({show:true});
        $.ajax({
            url: url,
            type: "POST",
            async: true,
            data: {/*'userid':UserID*/},
            success: function (data) {
                $('.modal-body').html(data);
                modalContainer.modal({show:true});
            }
        });
    });
    $('.all-apps').click(function(event){ // нажатие на кнопку - выпадает модальное окно
        event.preventDefault();
        var url = '/site/allapps';
        var clickedbtn = $(this);
        //var UserID = clickedbtn.data("userid");

        var modalContainer = $('#my-modal');
        var modalBody = modalContainer.find('.modal-body');
        modalContainer.modal({show:true});
        $.ajax({
            url: url,
            type: "POST",
            async: true,
            data: {/*'userid':UserID*/},
            success: function (data) {
                $('.modal-body').html(data);
                modalContainer.modal({show:true});
            }
        });
    });
    $(document).on("submit", '.newclient-form', function (e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            url: "/clients/addclient",
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Новый клиент добавлен.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#refresh_jqClients').click();
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });
    $(document).on("submit", '.newdriver-form', function (e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            url: "/drivers/adddriver",
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Новый водитель добавлен.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#refresh_jqDrivers').click();
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });
    $(document).on("submit", '.neworder-form', function (e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            url: "/site/addorder",
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Новый заказ добавлен.</strong>");
                    $('#success > .alert-success').append('</div>');
                    refreshArrivals();
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });
    $(document).on("submit", '.editorder-form', function (e) {
        e.preventDefault();
        var form = $(this);
        var id = $(this).find('#arrivals-id').val();
        //console.log(form.serialize());
        $.ajax({
            url: "/site/updateorder?id="+id,
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Заказ обновлен.</strong>");
                    $('#success > .alert-success').append('</div>');
                    refreshArrivals();
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });
    $(document).on("submit", '.newapp-form', function (e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            url: "/site/addapp",
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Новая заявка добавлена.</strong>");
                    $('#success > .alert-success').append('</div>');

                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });

    $(document).on("submit", '.setdrivers-form', function (e) {
        e.preventDefault();
        var form = $(this);
        $.ajax({
            url: "/site/tiedriver",
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Водитель привязан.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('button.set-driver').attr('disabled', 'disable');
                    refreshArrivals();
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });

    $(document).on("submit", '.editdriver-form', function (e) {
        e.preventDefault();
        var form = $(this);
        var id = $(this).find('#drivers-id').val();
        //console.log(form.serialize());
        $.ajax({
            url: "/drivers/updatedriver?id="+id,
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Водитель обновлен.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#refresh_jqDrivers').click();
                    $('button.edit-driver').attr('disabled', 'disabled');
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });

    $(document).on("submit", '.editclient-form', function (e) {
        e.preventDefault();
        var form = $(this);
        var id = $(this).find('#clients-id').val();
        //console.log(form.serialize());
        $.ajax({
            url: "/clients/updateclient?id="+id,
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Водитель обновлен.</strong>");
                    $('#success > .alert-success').append('</div>');
                    $('#refresh_jqClients').click();
                    $('button.edit-client').attr('disabled', 'disabled');
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });

    $(document).on("submit", '.driverorder-form', function (e) {
        e.preventDefault();
        var form = $(this);
        //console.log(form.serialize());
        $.ajax({
            url: "/departures-arrivals/setdriver",
            async: true,
            type: "POST",
            data: form.serialize(),
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Заказ принят.</strong>");
                    $('#success > .alert-success').append('</div>');
                    window.location.reload();
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });

    $(document).on("click", '.prev-order', function (e) {
        //e.preventDefault();
        if ($(this).is(':checked')){
            $('#prevOrderBlock').show(100);
        } else {
            $('#prevOrderBlock').hide(100);
        }
    });

    $(document).on("click", '.usedriver', function (e) {
        e.preventDefault();
        var arrival_id = $('input[name=arrival_id]').val();
        var url = $(this).attr('href');
        //console.log(form.serialize());
        $.ajax({
            url: url,
            async: true,
            type: "POST",
            data: {'arrival_id':arrival_id},
            success: function (result) {
                var modalContainer = $('#my-modal');
                var modalBody = modalContainer.find('.modal-body');
                var insidemodalBody = modalContainer.find('.gb-user-form');

                if (result == 'true') {
                    insidemodalBody.html(result).hide(); //
                    //$('#my-modal').modal('hide');
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').append("<strong>Водитель назначен.</strong>");
                    $('#success > .alert-success').append('</div>');
                    window.location.reload();
                    setTimeout(function() { // скрываем modal через 4 секунды
                        $("#my-modal").modal('hide');
                    }, 4000);
                }
                else {
                    modalBody.html(result).hide().fadeIn();
                }
            }
        });
    });

    $('.prow td').click(function () {
        let id = $(this).parent('.prow').data('id');
        $('.prow').removeClass('sel');
        $(this).parent('.prow').addClass('sel');
        $('button.edit-order').removeAttr('disabled');
        $('button.edit-order').attr('onClick', 'openEditOrder('+id+')');
    });

    $('.prow td').dblclick(function () {
        let idn = $(this).parent('.prow').data('id');
        alert(idn);
    });

    $('.prow .set-driver').click(function () {
        openSetDriver($(this).data('id'));
    });

});