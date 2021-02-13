const styleimg = document.querySelector('.stylepic img');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > styleimg.offsetTop) {
        $('.massage_icon').stop().fadeIn(500);
    };
});