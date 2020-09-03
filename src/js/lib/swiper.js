import Swiper from '../lib/swiper-bundle.js';
var mySwiper1 = new Swiper('.m2', {
    // direction: 'vertical', // 垂直切换选项
    autoplay: {
        delay: 1000,//1秒切换一次
        disableOnInteraction: false,
    },
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
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

var mySwiper2 = new Swiper('.m1', {
    // direction: 'vertical', // 垂直切换选项
    autoplay: {
        delay: 2000,//1秒切换一次
        disableOnInteraction: false,
    },
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    }
    // 如果需要滚动条
})

// export { mySwiper1, mySwiper2, mySwiper3, mySwiper4 };
export {mySwiper1, mySwiper2};