window.addEventListener('load', () => {
    // navicon(m)
    $('.navicon').on('click', function () {
        $('.nav_items').slideToggle(400);
    });
    // 風格介紹
    let flag = 0;
    $('.style_toggle').on('click', function () {
        if (flag === 0) {
            $('.nav_style').slideDown(400);
            $('.style_up').html('');
            flag++;
        } else if (flag === 1) {
            $('.nav_style').slideUp(400);
            $('.style_up').html('');
            flag--;
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


    // .style_items
    $('.stylebtn').on('mouseover', function () {
        $('.style_items').stop().slideDown(400);
    });
    $('.stylebtn').on('mouseout', function () {
        $('.style_items').stop().slideUp(400);
    });


    // message_m
    const title = document.querySelector('.bedstyle-2-bh');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > title.offsetTop) {
            $('.massage_icon').fadeIn(500);
        }
    })
});


