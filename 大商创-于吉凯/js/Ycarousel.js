// 轮播
var viewpage = document.getElementsByClassName('viewpage')[0];
// 所有小圆点
var circles = document.getElementsByClassName('circle');
// 左右按钮
var prev = document.getElementsByClassName('prev')[0];
var next = document.getElementsByClassName('next')[0];
// 放置图片和左右按钮的区域
var calList = document.getElementsByClassName('cal-list')[0];
// 排他函数
function backcircle(ele) {
    for (var j = 0; j < ele.length; j++) {
        ele[j].className = "circle";
    };
}
// 1.鼠标放置到图片区域时,显示左右按钮,自动轮播停止
calList.onmouseover = function() {
    clearInterval(viewpage.autoId);
};
// 2.鼠标离开图片区域时,左右按钮消失,自动轮播开始
calList.onmouseout = function() {
    prev.style.display = "none";
    next.style.display = "none";
    // 轮播开始
    autoplay();
};

var flag = 0;
var count = 0;
next.onclick = function() {
    flag++;
    count++;
    if (flag == circles.length) {
        flag = 0;
    };
    if (count == viewpage.children.length) {
        viewpage.style.left = 0;
        console.log('拉回');
        count = 1;
    };
    backcircle(circles);
    circles[flag].className = "circle active";
    var target = count * (-1920);
    moveAnimation2(viewpage, target);
};
prev.onclick = function() {
    if (count == 0) {
        count = viewpage.children.length - 1;
        viewpage.style.left = count * (-1920) + 'px';
    };
    count--;
    flag--;
    if (flag < 0) {
        flag = circles.length - 1;
    };
    // ①设置小圆点的样式
    // 先排他
    backcircle(circles);
    circles[flag].className = "circle active";
    // ②移动当前的ul使图片进行移动
    var target = count * (-1920);
    // 走动画
    moveAnimation2(viewpage, target);
};
// 5. 自动轮播调用右边按钮事件就可以了
function autoplay() {
    viewpage.autoId = setInterval(function() {
        // 调用右边按钮的点击事件
        next.onclick();
    }, 3000);
};
autoplay();
for (var i = 0; i < circles.length; i++) {
    circles[i].index = i;
    circles[i].onclick = function() {
        flag = this.index;
        count = this.index;
        console.log(flag);
        console.log(count);
        backcircle(circles);
        this.className = "circle active";
        var target = this.index * (-1920);
        moveAnimation2(viewpage, target);
    };
};


function moveAnimation2(ele, target) {
    // 使用DOM元素,用定时的id值来添加DOM元素属性
    clearInterval(ele.interId);
    // 获取定时器的id
    ele.interId = setInterval(function() {
        if (ele.offsetLeft == target) {
            clearInterval(ele.interId);
        } else {
            // 向右走向左走
            var slowStep = (target - ele.offsetLeft) / 10;
            slowStep = slowStep > 0 ? Math.ceil(slowStep) : Math.floor(slowStep);
            ele.style.left = ele.offsetLeft + slowStep + 'px';
        }
    }, 20);
};









// //数据渲染
// var obj = [{
//         src: '../images/1-3-3.jpg',
//         title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
//         price: '¥128.00'
//     }, {
//         src: '../images/1-3-1.jpg',
//         title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
//         price: '¥128.00'
//     },
//     {
//         src: '../images/1-3-2.jpg',
//         title: '马克华菲长袖T恤男士圆领修身韩版刺绣纯棉2017春装新款潮t 7002 立体3D绣花 欧美潮流范 17春装新品',
//         price: '¥128.00'
//     }
// ];
// obj.map(function(value, index) {
//     // console.log(value.src);
//     // console.log(value.title);
//     // console.log(value.price);
//     $('.son2-bo').eq(index).find('.y-img').find('img').attr('src', value.src);
//     $('.son2-bo').eq(index).find('.jinq').html(value.price);
//     $('.son2-bo').eq(index).find('.y-name').find('a').html(value.title);
// });