//init
let amountget = function () {
    let amount = 0;
    $('.goods').find('.sale').each(function (i, element) {
        amount += Number($(element).html());
    });
    $('.subtotal').find('em').html(amount);
    const carryPay = Number($('.totalBox').children('.carry').find('span').html().substr(2));
    $('.totalBox').children('.total').find('em').html(amount + carryPay);
};
amountget();


//數量-
$('.decrement').on('click', function () {
    let num = $(this).siblings('.itxt').val();
    const price = $(this).parents('td').siblings('.sale_box').find('.price').html();
    if ($(this).siblings('.itxt').val() == 0) {
        $(this).siblings('.itxt').val('0');
        return
    };
    num--;
    amount(num, price, $(this))
});


//數量+
$('.increment').on('click', function () {
    let num = $(this).siblings('.itxt').val();
    const price = $(this).parents('td').siblings('.sale_box').find('.price').html();
    num++;
    amount(num, price, $(this));
});


//數量-ipt手動更改
$('.itxt').on('change', function () {
    let num = $(this).val();
    const price = $(this).parents('td').siblings('.sale_box').find('.price').html();
    let tol = price * num;
    $(this).val(num);
    $(this).parents('td').siblings('.sale_box').find('.set').html(num);
    $(this).parents('td').siblings('.sale_box').find('.sale').html(tol);
    amountget();
});


// amount封裝
const amount = function (num, price, that) {
    let tol = price * num;
    that.siblings('.itxt').val(num);
    that.parents('td').siblings('.sale_box').find('.set').html(num);
    that.parents('td').siblings('.sale_box').find('.sale').html(tol);
    amountget();
};

//remove
$('.shop_remove').on('click', function () {
    alert('123')
})