import $ from './jquery.js';
// ajax
let autoajax = function () {
    let shop = localStorage.getItem('shop');
    if (shop) {
        shop = JSON.parse(shop); //  有cookie数据 才转JSON
        let ids = shop.map(elm => elm.id).join(); // 获取所有id
        $.ajax({
            type: "get",
            url: "../interface/getCart.php",
            data: {
                ids: ids
            },
            dataType: "json",
            success: function (res) {
                var template = '';
                res.forEach((elm, i) => {
                    let picture = JSON.parse(elm.p_img);
                    // 从cookie中去筛选数据
                    let arr = shop.filter(val => val.id == elm.id);
                    template +=
                        `
                        <div class="list_item" id="item_${elm.p_id}"> 
                        <div class="cart_check"><input type="checkbox" name="" id=""></div>
                        <div class="cart_img item_img">
                            <img src="..${picture[0].src}" alt="">
                        </div>
                        <div class="cart_name item_name">
                            ${elm.p_title}
                        </div>
                        <div class="cart_price item_price">${elm.p_price}.00元</div>
                        <div class="cart_count ">
                            <div class="item_count">
                                <div class="les">-</div>
                                <input type="text" class="count" value="1">
                                <div class="add">+</div>
                            </div>
                        </div>
                        <div class="cart_total item_total">${elm.p_price}.00元</div>
                        <div class="cart_action item_action">
                            <div class="del_action">×</div>
                        </div>
                    </div>
                    `
                });

                $('.cart_list').append(template);

                let obj = [];
                $.extend(true, obj, res);
                // 单选
                singleCheck();
                // 删除一件
                les();
                // 输入件数
                $('.count').on('change', function () {
                    // 找到点击的对应元素

                    let maxCount = 0;
                    // 找到对应的id
                    let searchId = $(this).parents('.list_item').attr('id').split('_')[1];


                    res.forEach((item, i) => {
                        if (item.p_id == searchId) {
                            maxCount = item.p_num;
                        }
                    });


                    if ($(this).val() > maxCount - 0) {
                        $(this).val(maxCount);
                    }
                    if ($(this).val() < 1) {
                        $(this).val(1);
                    }

                    $(this).parent().parent().siblings('.item_total').html(getCount(parseInt($(this).parent().parent().siblings('.item_price').html()), $(this).val()) + '元');
                });
                // 添加一件

                $('.add').on('click', function () {
                    let maxCount = 0;
                    // 找到对应的id
                    let searchId = $(this).parents('.list_item').attr('id').split('_')[1]
                    obj.forEach((item, i) => {
                        if (item.p_id == searchId) {
                            maxCount = item.p_num;
                        }
                    });
                    if (parseInt($(this).siblings('.count').val()) == maxCount) {
                        parseInt($(this).siblings('.count').val(maxCount));
                    } else {
                        $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) + 1);
                    }

                    // 统计单件商品的价格
                    $(this).parent().parent().siblings('.item_total').html(getCount(($(this).parent().parent().siblings('.item_price').html()), $(this).siblings('.count').val()) + '元');
                    // 选择才能变钱

                    if ($(this).parent().parent().siblings('.cart_check').children().prop('checked')) {
                        let priceList = [];
                        $('.cart_check').each((i, item) => {
                            if ($(item).children().prop('checked')) {
                                if ($(item).siblings('.item_total').html()) {
                                    priceList.push($(item).siblings('.item_total').html());
                                };
                            }
                        });
                        priceList = priceList.map(item => {
                            return parseInt(item);
                        });
                        let ALLprice = priceList.reduce((prev, next) => {
                            return prev + next;
                        });

                        $('.payTotal>span').html(ALLprice);
                    } else {
                        // $('.payTotal>span').html('0');
                    }
                });
            }
        });
    }
};


function getCount(price, count) {
    return (parseInt(price) * count).toFixed(2);
}

// 减少一件
let les = function () {
    $('.les').on('click', function () {
        if (parseInt($(this).siblings('.count').val()) == 1) {
            parseInt($(this).siblings('.count').val(1));
        } else {
            $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) - 1);
        }

        $(this).parent().parent().siblings('.item_total').html(getCount(($(this).parent().parent().siblings('.item_price').html()), $(this).siblings('.count').val()) + '元');

        if ($(this).parent().parent().siblings('.cart_check').children().prop('checked')) {
            let priceList = [];
            $('.cart_check').each((i, item) => {
                if ($(item).children().prop('checked')) {
                    if ($(item).siblings('.item_total').html()) {
                        priceList.push($(item).siblings('.item_total').html());
                    };
                }
            });
            priceList = priceList.map(item => {
                return parseInt(item);
            });
            let ALLprice = priceList.reduce((prev, next) => {
                return prev + next;
            });
            $('.payTotal>span').html(ALLprice);
        } else {
            // $('.payTotal>span').html('0');
        }
    });
}
// 全选
let checkAll = function () {
    $('#cart_check').on('click', function () {
        if ($('#cart_check').prop('checked')) {
            $('input[type="checkbox"]').prop('checked', true);
            $('#selectNum').html($('input[type="checkbox"]').length - 1 + ' ');

            let priceList = [];
            $('.cart_check').each((i, item) => {
                if ($(item).children().prop('checked')) {
                    if ($(item).siblings('.item_total').html()) {
                        priceList.push($(item).siblings('.item_total').html());
                    };
                }
            });
            priceList = priceList.map(item => {
                return parseInt(item);
            })
            let ALLprice = priceList.reduce((prev, next) => {
                return prev + next;
            });
            $('.payTotal>span').html(ALLprice);
        } else {
            $('input[type="checkbox"]').prop('checked', false)
            $('#selectNum').html('0 ')
            $('.payTotal>span').html('0');
        }
    });
}
// 单选
let singleCheck = function () {
    $('#productNum').html($('.list_item').length)
    let allCheckbox = [];
    let singlebox = [];
    $('input[type="checkbox"]').each((i, item) => {
        allCheckbox.push($(item));
        let total = 0;
        if (i > 0) {
            singlebox.push($(item));
            $(item).on('click', function () {
                let trueList = [];
                singlebox.forEach(item => {
                    trueList.push(item.prop('checked'));
                });
                let flag = trueList.every(item => {
                    return item;
                });
                // 选择数量
                let payTotal = 0
                $('input[type="checkbox"]').each((i, item) => {
                    if ($(item).prop('checked')) {
                        $('#cart_check').prop('checked', false);
                        payTotal++;
                    }
                });

                if (flag) {
                    $('#cart_check').prop('checked', true);
                }

                $('#selectNum').html(payTotal)

                // 选择起来的商品算总钱
                if ($(item).prop('checked')) {
                    var m = [];
                    allCheckbox.forEach((item, i) => {
                        if (item.prop('checked') && i > 0) {
                            m.push(parseInt(item.parent().siblings('.item_total').html()))
                        }
                    });
                    total = m.reduce((prev, next) => {
                        return prev + next
                    });
                    $('.payTotal1').html(total)
                } else {
                    let none = [];
                    allCheckbox.forEach(item => {
                        if ($(item).prop('checked')) {
                            none.push($(item).parent().siblings('.item_total').html())
                        }
                    });
                    none = none.map(item => {
                        return parseInt(item);
                    });
                    if (none.length == 0) {
                        $('.payTotal1').html(0)
                    } else {
                        let total = none.reduce((prev, next) => {
                            return prev + next;
                        });
                        $('.payTotal1').html(total)
                    }
                }
            });
        }
    });
}

let deleteItem = function () {
    $('.cart_list').on('click', function (ev) {
        if ($(ev.target).hasClass('del_action')) {
            let that = $(ev.target);
            let shopList = localStorage.getItem('shop');
            let shop = JSON.parse(shopList);
            let searchId = that.parents('.list_item').attr('id').split("_")[1];
            let delId = -1;
            shop.forEach((item, index) => {
                if (item.id == searchId) {
                    delId = index;
                }
            });
            shop.splice(delId, 1);
            let delShop = JSON.stringify(shop);
            localStorage.setItem('shop', delShop);
            that.parents('.list_item').remove();
        }
    })
}

export { les, checkAll, singleCheck, autoajax, deleteItem }