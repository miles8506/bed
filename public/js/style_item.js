// .style_items
$('.stylebtn').on('mouseover', function () {
    $('.style_items').stop().slideDown(400);
});
$('.stylebtn').on('mouseout', function () {
    $('.style_items').stop().slideUp(400);
});
