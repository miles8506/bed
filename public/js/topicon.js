// topicon
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 800) {
        $('.topicon').stop().fadeIn(300);
    } else {
        $('.topicon').stop().fadeOut(300);
    };
});
const topicon = document.querySelector('.topicon');
topicon.addEventListener('click', () => {
    move2(window, 0);
});