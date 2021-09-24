//数据渲染
var obj1 = [{
        src: '../images/001-x.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    }, {
        src: '../images/002-x.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    },
    {
        src: '../images/003-x.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    },
    {
        src: '../images/002-x.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    }
];
obj1.map(function(value, index) {
    // console.log(value.src);
    // console.log(value.title);
    // console.log(value.price);
    $('.son2-bo').eq(index).find('.y-img').find('img').attr('src', value.src);
    $('.son2-bo').eq(index).find('.jinq').html(value.price);
    $('.son2-bo').eq(index).find('.y-name').find('a').html(value.title);
});




var obj2 = [{
        src: '../images/001-xy.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    }, {
        src: '../images/002-xy.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    },
    {
        src: '../images/003-xy.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    }, {
        src: '../images/004-xy.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    },
    {
        src: '../images/005-xy.jpg',
        title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
        price: '¥128.00'
    }
];
for (let i = 0; i < obj2.length; i++) {
    var YSrc = obj2[i].src;
    var YTitle = obj2[i].title;
    var YPrice = obj2[i].price;
    var YConent = '<div class="y-son1-warp "><div class="y-son1-img "> <a href="shwqcr.html?src=' + YSrc + '" target="_blank "><img src="' + YSrc + '" alt=""> </a> </div><div class="y-son1-info "><div class="y-name "><a href="shwqcr.html?src=' + YSrc + '"">' + YTitle + '</a></div><div class="y-item "><div class="y-item-price ">' + YPrice + '</div><span class="y-item-ap ">已有<em>15</em>人预约</span></div><div class="y-dibu "><a href="# " class="y-btn ">预售已结束</a> </div></div></div>';
    $('.y-ydata1').eq(i).append(YConent);
};