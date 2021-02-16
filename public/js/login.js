// tab欄切換
let index = null;
$('.login_hd div').on('click', function () {
    index = $(this).index();
    $('.login_hd div').find('span').removeClass('line');
    $(this).find('span').addClass('line');
    $('.login_bd #wrap').css('display', 'none').eq(index).css('display', 'block');
});