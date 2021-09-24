//时间
var text = document.querySelector('.time');
setInterval(function() {
    text.innerHTML = '倒计时' + timecha('2022/1/1');

    function timecha(date) {

        var date1 = new Date();
        var date2 = new Date(date);
        var sTime = (date2 - date1) / 1000;

        var days = parseInt(sTime / 60 / 60 / 24);
        days = days < 10 ? '0' + days : days;

        var hours = parseInt(sTime / 60 / 60 % 24);
        hours = hours < 10 ? '0' + hours : hours;

        var minutes = parseInt(sTime / 60 % 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;

        var seconds = parseInt(sTime % 60);
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return days + '天' + '&emsp;' + hours + ':' + minutes + ':' + seconds;
    };
}, 1000);

// console.log($('y-nav-son').firstchild);


// tab切换
$('.y-list li a').click(function() {
    var index = $(this).closest('li').index();
    $('.y-box1').hide();
    $($('.y-tox')[index]).show().siblings('.y-tox').hide();

    $(this).addClass('selected').css("color", 'red').closest("li").siblings().children().removeClass('selected').css("color", "#3a78bf");

    $(this).parents('.y-list').prev().removeClass('selected').children('a:eq(0)').css('color', '#3a78bf');
});
$('.y-quanbu').click(function() {
    $('.y-box1').show();
    $('.y-tox').hide();
    $(this).addClass('selected').children('a').css("color", '#f00').end().next().find('a').removeClass('selected').css("color", "#3a78bf");
});