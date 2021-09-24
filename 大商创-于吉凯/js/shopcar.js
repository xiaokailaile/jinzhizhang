$(function() {
    var allCheckBox = $('input[type="checkbox"]');
    var allCheck = $('.whole-check'); //选中所有全选框
    var storCheck = $('.shop-check'); //选择所有的店铺全选
    var sonCheck = $('.son-check'); //选择所有的商品复选框
    //点击每一个按钮变成选中状态
    allCheckBox.click(function() {
            // 记忆：is方法判断是否具有此属性值
            if ($(this).is(':checked')) {
                $(this).next('label').addClass('active')
                $(this).prop('checked', true)
            } else {
                $(this).next('label').removeClass('active')
                $(this).prop('checked', false)
            }
            allPrice()

        })
        //点击全选按钮选中所有的框
    allCheck.click(function() {
            if ($(this).is(':checked')) {
                allCheckBox.next('label').addClass('active');
                allCheckBox.prop('checked', true)
            } else {
                allCheckBox.next('label').removeClass('active');
                allCheckBox.prop('checked', false)
            }
            allPrice()

        })
        //选中计算总价
    function allPrice() {
        var goallPrice = 0;
        var sum = 0;
        sonCheck.each(function() {
            if ($(this).is(':checked')) {
                //输入框值
                var amount = parseFloat($(this).parents('.cart-lists').find('.amount-box input').val());
                //文本数值
                var price = parseFloat($(this).parents('.cart-lists').find('.cart-sum p').html());
                // console.log(price);
                goallPrice += price;
                console.log(goallPrice);
                sum += amount;
            }
        })
        $('.pay-price').html(goallPrice);
        $('.buy-num').html(sum);
    };
    //点击加号
    var add = $('.add');
    //点击减号
    var reduce = $('.reduce');
    //点击加号
    add.click(function() {
        var amount = parseFloat($(this).parents('.amount-box').find('input').val());
        amount += 1;
        console.log(amount);
        if (amount >= 2) {
            // $('.amount-box button').css('disabled', false);
            $('.reduce').attr("disabled", false);
        };
        $(this).parents('.amount-box').find('input').val(amount);
        //计算小计
        var terw = parseFloat($(this).parents('.cart-lists').find('.cart-price p').html());
        console.log(terw);
        var price = amount * terw;
        console.log(price);
        $(this).parents('.cart-lists').find('.price-sum').html(price);
        allPrice();
    });
    //点击减号
    reduce.click(function() {
        var amount = parseFloat($(this).parents('.amount-box').find('input').val());
        amount -= 1;
        if (amount < 1) {
            amount = 1;
        }
        $(this).parents('.amount-box').find('input').val(amount);
        //计算小计
        var onePrice = parseFloat($(this).parents('.cart-lists').find('.cart-price p').html());
        var price = amount * onePrice;
        $(this).parents('.cart-lists').find('.price-sum').html(price);

        allPrice()
    });
    //输入值计算
    var inputPrice = $('.cart-content .amount-box input');
    inputPrice.keyup(function() {
        var amount = parseFloat($(this).val().replace(/\D|^0/g, ""));
        if (!amount) {
            amount = 1;
        }
        $(this).val(amount)
        var onePrice = parseFloat($(this).parents('.cart-lists').find('.cart-price p').html());
        var price = amount * onePrice;
        $(this).parents('.cart-lists').find('.price-sum').html(price);

        allPrice()
    });
    //删除
    var that = null;
    $('.cart-dele').click(function() {
        that = $(this);
        $('.modal-bg').fadeIn(400);
        $('.modal-box').fadeIn(400);
    })
    $('.top').click(function() {
        $('.modal-box').fadeOut(400);
    })

    $('.top .ok').click(function() {
        $('.modal-bg').fadeOut(400);
        var shop = that.parents('.cart-box');
        that.parents('.cart-lists').remove();
        sonCheck = $('.son-check');
        allPrice()
        if (shop.find('.cart-content').length == 0) {
            shop.remove();
            sonCheck = $('.son-check');
            allPrice()
        };
    });
    //一个不选全选就为false
    //商城全部选中就会选中
    sonCheck.click(function() {
            var num = 0;
            var len = $(this).parents('.cart-box').find('.son-check').length;
            $(this).parents('.cart-box').find('.son-check').each(function() {
                if ($(this).is(':checked')) {
                    num++;
                }
                if (num == len) {
                    $(this).parents('.cart-box').find('.shop-check').next('label').addClass('active');
                    $(this).parents('.cart-box').find('.shop-check').prop('checked', true)
                } else {
                    $(this).parents('.cart-box').find('.shop-check').next('label').removeClass('active');
                    $(this).parents('.cart-box').find('.shop-check').prop('checked', false)
                }

            });
            // 选中所有店铺内所有商品后将店铺也选中，全选也选中
            var len2 = $(this).parents('.cart-wrap').find('.son-check').length;
            var num1 = 0
            $(this).parents('.cart-wrap').find('.son-check').each(function() {
                if ($(this).is(':checked')) {
                    num1++;
                }
                if (num1 == len2) {
                    $(this).parents('.cart-wrap').find('.whole-check').next('label').addClass('active');
                    $(this).parents('.cart-wrap').find('.whole-check').prop('checked', true)
                } else {
                    $(this).parents('.cart-wrap').find('.whole-check').next('label').removeClass('active');
                    $(this).parents('.cart-wrap').find('.whole-check').prop('checked', false)
                }
            })
            allPrice()
        })
        // 点击店铺全选时选择店铺内内所有商品
    storCheck.click(function() {
        if ($(this).is(':checked')) {
            $(this).parents('.cart-box').find('.son-check').next('label').addClass('active');
            $(this).parents('.cart-box').find('.son-check').prop('checked', true);
            var num = 0
            var len = $(this).parents('.cart-wrap').find('.shop-check').next('label').length;
            $(this).parents('.cart-wrap').find('.shop-check').each(function() {

                if ($(this).is(':checked')) {
                    num++
                }
                if (num == len) {
                    $(this).parents('.cart-wrap').find('.whole-check').next('label').addClass('active');
                    $(this).parents('.cart-wrap').find('.whole-check').prop('checked', true)
                }

            })


        } else {
            $(this).parents('.cart-box').find('.son-check').next('label').removeClass('active');
            $(this).parents('.cart-box').find('.son-check').prop('checked', false);
            $(this).parents('.cart-wrap').find('.whole-check').next('label').removeClass('active');
            $(this).parents('.cart-wrap').find('.whole-check').prop('checked', false)
        }
        allPrice()
    })
});