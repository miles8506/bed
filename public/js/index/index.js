window.addEventListener('load', () => {
    // moblenav區塊
    const navicon = document.querySelector('.navicon');
    const nav_list = document.querySelector('.nav_list');
    let flag1 = 0;
    navicon.addEventListener('click', () => {
        if (flag1 === 0) {
            nav_list.style.display = 'block';
            document.body.style.backgroundColor = 'rgba(0,0,0, .3)';
            flag1++;
        } else if (flag1 === 1) {
            nav_list.style.display = 'none';
            document.body.style.backgroundColor = '';
            flag1--;
        };
    });
    // topicon
    const tophigh = document.querySelector('.contain-row2');
    document.addEventListener('scroll', () => {
        if (window.pageYOffset > 800) {
            $('.topicon').fadeIn(500);
        } else {
            $('.topicon').fadeOut(500);
        };
    });
    var topicon = document.querySelector('.topicon');
    topicon.addEventListener('click', () => {
        move2(window, 0);
    });
});
// share
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
