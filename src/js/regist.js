import $ from '../js/lib/jquery.js';
import { registCheck } from '../js/lib/registCheck.js';
import '../js/lib/jquery.md5.js';
registCheck();

let registObj = {};
let registStr = '';
$('#myform input').on('input', function () {
    $('#myform input').each(function (i, e) {
        if (e.name == 'password') {
            registObj[e.name] = $.md5($(e).val()+'fbq');
        } else {
            registObj[e.name] = $(e).val();
            let username = $('#username').val();
            $.ajax({
                type: "get",
                url: "../interface/existUser.php",
                data: {'username':username},
                success: function (response) {
                    
                    response = JSON.parse(response);
                    if(!response.has) {
                        $('.username').html(response.msg).css('color','red');
                        $('#username').attr('data-pass',false);
                    }
                }
            });
        }
    })
     
    
});

$('#btn').on('click', function () {
    registObj['createtime'] = new Date().toLocaleDateString();
    registStr = JSON.stringify(registObj);
    $.ajax({
        type: "psot",
        url: "../php/regist.php",
        data: registStr,
        dataType: "json",
        success: function (response) {
            // response = JSON.parse(response);
            console.log(response);
            if(response.isRegist) {
                location.href = "../html/login.html";
            }
        }
    });
})








