 // import { mySwiper3,mySwiper4 } from '../js/lib/auto.js';
 import $ from '../js/lib/jquery.js';
 import Swiper from './lib/swiper-bundle.js';
 import { loupe } from '../js/lib/loupe.js';
 $('header').load('../html/header.html');
 $('#fixNav').load('../html/fixNav.html');
 $(function() {
     $('footer').load('../html/footer.html');
     loupe();
 });

 var temp1 = [];
 (function() {

     let id = location.search.split('=')[1];

     $.ajax({
         type: "get",
         url: "../interface/product.php",
         data: {
             id: id
         },
         dataType: "json",
         success: function(res) {
             console.log(res)
             temp1.push(res.p_id);
             let temp = '';
             temp +=
                 `
            <p class="p_title">${res.p_title}</p>
                <p class="p_desc">
                    ${res.p_desc}
                </p>
                <p>
                    小米自营
                </p>
                <p class="p_price">${res.p_price}元</p>
                <div class="line"></div>
               
                    <p class="p_margin">有现货</p>
                </div>
               
                <!-- 版本 -->
                <p class="title">选择版本</p>
                <nav class="p_version">
                    <li>陶瓷黑</li>
                    <li>透明版</li>
                    <li>亮银版</li>
                </nav>
                <!-- 意外保护 -->
                <p class="title">选择小米提供的意外保护<span>了解意外保护></span></p>
                <div class="All">
                    <nav class="p_prodect clear_b">
                        <div class="oneCheckbox"></div>
                        <div class="checkBox">
                            <input type="checkbox" name="" id="">
                            <img src="../images/protect.png" alt="">
                            <div class="box">
                                <p class="is">意外保障服务</p>
                                <span class="price_tri">349元</span>
                                <p>手机意外碎屏</p>
                                <input type="checkbox" name="" id="">
                                <span>我已阅读 <span>服务条款|常见问题</span></span>
                                <span>349元</span>
                            </div>
                        </div>
                    </nav>
                    <nav class="p_prodect margin_b">
                        <div class="oneCheckbox"></div>
                        <div class="checkBox">
                            <input type="checkbox" name="" id="">
                            <img src="../images/protect.png" alt="">
                            <div class="box">
                                <p class="is">碎屏保障服务</p>
                                <span class="price_tri">249元</span>
                                <p>手机意外碎屏</p>
                                <input type="checkbox" name="" id="">
                                <span>我已阅读 <span>服务条款|常见问题</span></span>
                                <span>249元</span>
                            </div>
                        </div>
                    </nav>
                </div>

                <!-- 延长保修 -->
                <p class="title">选择小米提供的延长保修<span>了解延长保护></span></p>
                <nav class="p_prodect margin_b">
                    <div class="oneCheckbox"></div>
                    <div class="checkBox">
                        <input type="checkbox" name="" id="">
                        <img src="../images/protect.png" alt="">
                        <div class="box">
                            <p class="is">延长保修服务</p>
                            <span class="price_tri">159元</span>
                            <p>厂保延一年，性能保障免费维修</p>
                            <input type="checkbox" name="" id="">
                            <span>我已阅读 <span>服务条款|常见问题</span></span>
                            <span>159元</span>
                        </div>
                    </div>
                </nav>
                <!-- 云服务 -->
                <p class="title">选择小米提供的云服务<span>了解云空间服务></span></p>
                <div class="All">
                    <nav class="p_prodect clear_b">
                        <div class="oneCheckbox"></div>
                        <div class="checkBox">
                            <input type="checkbox" name="" id="">
                            <img src="../images/cloud.jpg" alt="">
                            <div class="box">
                                <p class="is">云空间年卡200G</p>
                                <span class="price_tri">349元</span>
                                <p>主商品签收后，自动激活至下单账号</p>
                                <input type="checkbox" name="" id="">
                                <span>我已阅读 <span>服务条款|常见问题</span></span>
                                <span>159元</span>
                            </div>
                        </div>
                    </nav>
                    <nav class="p_prodect clear_b">
                        <div class="oneCheckbox"></div>
                        <div class="checkBox">
                            <input type="checkbox" name="" id="">
                            <img src="../images/cloud.jpg" alt="">
                            <div class="box">
                                <p class="is">云空间年卡50G</p>
                                <span class="price_tri">49元</span>
                                <p>主商品签收后，自动激活至下单账号</p>
                                <input type="checkbox" name="" id="">
                                <span>我已阅读 <span>服务条款|常见问题</span></span>
                                <span>49元</span>
                            </div>
                        </div>
                    </nav>
                    <nav class="p_prodect margin_b">
                        <div class="oneCheckbox"></div>
                        <div class="checkBox">
                            <input type="checkbox" name="" id="">
                            <img src="../images/cloud.jpg" alt="">
                            <div class="box">
                                <p class="is">云空间年卡50G</p>
                                <span class="price_tri">已省5元</span>
                                <p>主商品签收后，自动激活至下单账号</p>
                                <input type="checkbox" name="" id="">
                                <span>我已阅读 <span>服务条款|常见问题</span></span>
                                <span>1元</span>
                            </div>
                        </div>
                    </nav>
                </div>

                <!-- 价格 -->
                <div class="All_price">
                    <p>
                        <span>小米10至尊纪念版 8GB+256GB 陶瓷黑</span>
                        <span>${res.p_price}元</span>
                    </p>
                    <div>总计：${res.p_price}元</div>
                </div>

                <div class="p_btn">
                    <button id="addCartBtn" class="btn btn-warning b1">加入购物车</button>
                    <button class="btn btn-info b2">喜欢</button>
                </div>


                <div class="mi_ico">
                    <span>
                        <span class="iconfont icon-dagou"></span><span>小米自营</span>
                    </span>
                    <span>
                        <span class="iconfont icon-dagou"></span><span>小米发货</span>
                    </span>
                    <span>
                        <span class="iconfont icon-dagou"></span><span>7天无理由退货</span>
                    </span>
                    <span>
                        <span class="iconfont icon-dagou"></span><span>运费说明</span>
                    </span>
                    <span>
                        <span class="iconfont icon-dagou"></span><span>企业信息</span>
                    </span>
                    <br>
                    <span>
                        <span class="iconfont icon-dagou"></span><span>7天价格保护</span>
                    </span>

                </div>            
            `;

             $('.p_right').append(temp).find('#addCartBtn').on('click', function() {
                 addItem(res.p_id, res.p_price, res.p_num);
             });

             let imgTemp = '';
             let loupeTemp = '';
             let imgList = JSON.parse(res.p_img);

             imgList.forEach((item, i) => {
                 if (i > 0) {
                     temp1.push(item);
                     imgTemp +=
                         `
                    <div class="swiper-slide"><img class="bigpicture" src="..${item.src}" alt=""></div>
                    `

                     loupeTemp +=
                         `
                    <img class="loupepicture hide" src="..${item.src}"  alt="">
                    `
                 }
             })
             $('.product_images>.swiper-wrapper').append(imgTemp);
             $('.loupe').append(loupeTemp);

             var mySwiper3 = new Swiper('.m3', {
                 // direction: 'vertical', // 垂直切换选项
                 autoplay: {
                     delay: 1000, //1秒切换一次
                     disableOnInteraction: false,
                 },
                 loop: true, // 循环模式选项

                 on: {
                     click: function() {
                         console.log(this);
                     }
                 },

                 // 如果需要分页器
                 pagination: {
                     el: '.swiper-pagination',
                     clickable: true,
                     renderBullet: function(index, className) {

                         return `<span class="${className}"><image src="../images/bp${temp1[0]}-${(index + 1)}.jpg"></span>`;
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





             // // //鼠标离开开始自动切换
             mySwiper3.el.onmouseout = function() {
                 mySwiper3.autoplay.start();
             }

             function addItem(id, price, num) {
                 let shop = localStorage.getItem('shop');
                 let isLogin = localStorage.getItem('username');
                 let product = {
                     id: id,
                     price: price,
                     num: num
                 };

                 if (isLogin) {
                     if (shop) {
                         shop = JSON.parse(shop);
                         if (shop.some(elm => elm.id == id)) {
                             location.href = './cart.html';
                         } else {
                             shop.push(product);
                         }
                     } else {
                         shop = [];
                         shop.push(product);
                     }
                     localStorage.setItem('shop', JSON.stringify(shop));
                     location.href = './cart.html';
                 } else {
                     location.href = './login.html';
                 }

             }

         }
     });
 })()