// 風格介紹
let flag = 0;
$('.style_toggle').on('click', function () {
    if (flag === 0) {
        $('.nav_style').stop().slideDown(400);
        $('.style_up').html('');
        flag++;
    } else if (flag === 1) {
        $('.nav_style').stop().slideUp(400);
        $('.style_up').html('');
        flag--;
    };
});