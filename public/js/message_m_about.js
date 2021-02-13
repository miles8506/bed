const content = document.querySelector('.content');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > content.offsetTop) {
        $('.massage_icon').stop().fadeIn(500);
    };
});