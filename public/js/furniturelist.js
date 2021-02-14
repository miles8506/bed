// 點擊加入購物車
const cart_page = document.querySelector('.cart_page');
$('.buy').on('click', function () {
    $('#bgc').addClass('bgc');
    $('.cart_page').show();
    cart_page.innerHTML = `
    <div class="wrap">
        <div class="cart_page_pic"><img src="../../public/upload/ad31.jpg" alt=""></div>
        <div class="goods_content">
            <div class="goods_name">傢俱組</div>
            <div class="onsale_price">特價NT$<span id="price">3000</span>/<span id="set">1</span>組</div>
            <div class="hide hide_price">3000</div>
            <div class="origin_price">原價<span>NT$5000/1組</span></div>
            <div class="quantity-form">
                <a href="javascript:;" class="decrement">-</a>
                <input type="text" class="itxt" value="1" disabled>
                <a href="javascript:;" class="increment">+</a>
            </div>
            <a href="./goods_information.html" target="blank" class="goods_infor">商品資訊</a>
            <div class="join_cart"><a href="../shopping cart/cart.html">加入購物車</a></div>
        </div>
    </div>`;
});


// 失去焦點後退出購物車小視窗
$('#bgc').on('click', function () {
    $(this).removeClass('bgc');
    $('.cart_page').hide();
});


//購物車內選擇商品數量-減
$('.cart_page').on('click', '.decrement', function () {
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
$('.cart_page').on('click', '.increment', function () {
    let num = $('.itxt').val();
    const price = $('.hide_price').html();
    num++;
    amount(num, price);
});


// amount封裝
const amount = function (num, price) {
    let tol = price * num;
    $('.itxt').val(num);
    $('#set').html(num);
    $('#price').html(tol);
};
