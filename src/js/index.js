import $ from '../js/lib/jquery.js';
import { mySwiper1, mySwiper2 } from '../js/lib/swiper.js';
import '../js/lib/jquery.lazyload.js';
import { hideElement, hideHeight, hideWidth } from '../js/lib/hide.js';
import { countdown } from '../js/lib/countdown.js';

$('header').load('../html/header.html');
$('#fixNav').load('../html/fixNav.html');
$('footer').load('../html/footer.html');

hideHeight($('.cNav_search>li>a'), $('.cNav_second'), 230);
hideHeight($('.cNav_second'), $('.cNav_second'), 230);
hideWidth($('.lNav>ul a'), $('.lNav_second'), $('.lNav_second>nav').length * 248);
hideWidth($('.lNav_second>nav'), $('.lNav_second'), $('.lNav_second>nav').length * 248);
countdown();

(function () {
    $.ajax({
        type: "get",
        url: "../interface/index.php",
        dataType: "json",
        success: function (res) {
            let temp = '';

            res.forEach(item => {
                let p_img = JSON.parse(item.p_img);
                temp +=
                    `
            <li>
            <a href="./product.html?id=${item.p_id}">
                    <div>
                        <img class="lazy" data-original="..${p_img[0].src}" alt="">
                    </div>
                    <h3 class="title">${item.p_title}</h3>
                    <p class="desc">${item.p_desc}</p>
                    <p class="price">
                        <span>${item.p_price}元起</span>
                    </p>
                    </a>
                </li>
            `
            })



            $('.nm_phone').append(temp);
            $("img.lazy").lazyload({
                placeholder: "../images/timg.gif", //用图片提前占位
                effect: "fadeIn", // 载入使用何种效果
            });
        }
    });
})()

$(function() {
    let isLogin = localStorage.getItem('username');
    if(isLogin) {
        $('#login').attr('href','#').html('退出 '+isLogin);
        $('#login').on('click',function(){
            localStorage.removeItem('username');
            location.reload();
        })
    }
    
})





