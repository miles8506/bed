//購物車內選擇商品數量-減
$('.decrement').on('click', function () {
    let num = $('.itxt').val();
    const price = $('.hide_price').html();
    num--;
    if (num < 1) {
        num = 1;
        $('.itxt').val(num);
        return
    };
    amount(num, price);
});


//購物車內選擇商品數量-加
$('.increment').on('click', function () {
    let num = $('.itxt').val();
    const price = $('.hide_price').html();
    num++;
    amount(num, price);
});

//ipt
$('.itxt').on('blur', function () {
    let num = $('.itxt').val();
    const price = $('.hide_price').html();
    amount(num, price);
});


// amount封裝
const amount = function (num, price) {
    let tol = price * num;
    $('.itxt').val(num);
    $('#set').html(num);
    $('#price').html(tol);
};


//tab欄切換
let index = null;
$('.information_hd li').eq(0).find('em').addClass('line');
$('.information_hd li').on('click', function () {
    index = $(this).index();
    $('.information_hd').find('em').removeClass('line');
    $(this).find('em').addClass('line');
    $('.information_bd .bd_box').css('display', 'none').eq(index).css('display', 'block');
});