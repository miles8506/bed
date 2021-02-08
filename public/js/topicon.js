// topicon
const tophigh = document.querySelector('.contain-row2');
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 800) {
        $('.topicon').stop().fadeIn(300);
    } else {
        $('.topicon').stop().fadeOut(300);
    };
});
var topicon = document.querySelector('.topicon');
topicon.addEventListener('click', () => {
    move2(window, 0);
});