import $ from '../js/lib/jquery.js';
import '../js/lib/jquery.md5.js';

$('#username').on('input', function () {
    $.ajax({
        type: "post",
        url: "../interface/existUser.php",
        data: { 'username': $(this).val() },
        dataType: "json",
        success: function (response) {
            if (!response.has) {
                $('.username').html(response.msg).css('color', 'green');
            } else {
                $('.username').html('');
            }
        }
    });
})

$('#btn').on('click', function () {
    let username = $('#username').val();
    let password = $.md5($('#password').val() + 'fbq');
    $.ajax({
        type: "post",
        url: "../interface/login.php",
        data: {
            'username':username,
            'password':password
        },
        dataType: "json",
        success: function (response) {
            if(response.isLogin) {
                let ls = localStorage;
                // console.log(response);
                ls.setItem("username", response.username);
                location.href = '../html/index.html';
            }
        }
    });
})
