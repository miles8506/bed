// message_m
const footer = document.querySelector('.footer');
window.addEventListener('scroll', function () {
    if (footer.offsetTop - window.pageYOffset < 840) {
        $('.massage_icon').stop().fadeIn(500);
    };
});
