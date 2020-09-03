import Swiper from '../lib/swiper-bundle.js';

var mySwiper3 = new Swiper('.m3', {
    // direction: 'vertical', // 垂直切换选项
    autoplay: {
        delay: 1000,//1秒切换一次
        disableOnInteraction: false,
    },
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            
            return '<span class="' + className + '"><image src="../images/bp' + (index + 1) + '.jpg"></span>';
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


mySwiper3.el.onmouseover = function () {
   
    mySwiper3.autoplay.stop();
    mySwiper4.autoplay.stop();
}

// // //鼠标离开开始自动切换
mySwiper3.el.onmouseout = function () {
    mySwiper3.autoplay.start();
    mySwiper4.autoplay.start();
}


var mySwiper4 = new Swiper('.m4', {
    // direction: 'vertical', // 垂直切换选项
    autoplay: {
        delay: 1000,//1秒切换一次
        disableOnInteraction: false,
    },
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><image src="../images/bp' + (index + 1) + '.jpg"></span>';
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
export {mySwiper3,mySwiper4}