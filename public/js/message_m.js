// message_m
const title = document.querySelector('.bedstyle-2-bh');
const styleimg = document.querySelector('.stylepic img');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > title.offsetTop) {
        $('.massage_icon').stop().fadeIn(500);
    };
});