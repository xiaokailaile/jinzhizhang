// tab切换
$('.y-list li a').click(function() {
    var index = $(this).closest('li').index();
    $('.son2').hide();
    $($('.son2-y-tox')[index]).show().siblings('.son2-y-tox').hide();

    $(this).addClass('selected').css("color", 'red').closest("li").siblings().children().removeClass('selected').css("color", "#3a78bf");

    $(this).parents('.y-list').prev().removeClass('selected').children('a:eq(0)').css('color', '#3a78bf');
});
$('.y-quanbu').click(function() {
    $('.son2').show();
    $('.son2-y-tox').hide();
    $(this).addClass('selected').children('a').css("color", '#f00').end().next().find('a').removeClass('selected').css("color", "#3a78bf");
});