let registCheck = function () {
    let reg = {
        "username": /^[A-z]\w{5,15}$/,
        "password": /^.{6,16}$/,
        "email": /^\w{6,16}@[A-z0-9_-]{2,}\.[A-z]{2,7}\.?[A-z]*$/,
    };

    $('#myform input:not([type="button"])').each(function (index, elm) {
        $(elm).on('input', function () {
            if ($(elm).attr('id') == 'checkpass') return;
            if (reg[$(elm).attr('id')].test($(elm).val())) {
                $('span[class="' + $(elm).attr('id') + '"]').html('通过验证').css('color','green');
                $(this).attr('data-pass', true);
            } else {
                $('span[class="' + $(elm).attr('id') + '"]').html('未通过验证').css('color','red');
                $(this).attr('data-pass', false);
            }
            check();
        });
    });
    function check() {
        if ($('[data-pass=true]').length == $('#myform input:not([type="button"])').length) {
            $('#btn').removeAttr('disabled');
        } else {
            $('#btn').attr('disabled', 'disabled');
        }
    }
}
export {registCheck};