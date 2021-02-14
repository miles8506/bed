// topicon
const goods_wrap = document.querySelector('.goods_wrap');
document.addEventListener('scroll', () => {
    if (window.pageYOffset > goods_wrap.offsetTop) {
        $('.topicon').stop().fadeIn(300);
    } else {
        $('.topicon').stop().fadeOut(300);
    };
});
const topicon = document.querySelector('.topicon');
topicon.addEventListener('click', () => {
    move2(window, 0);
});