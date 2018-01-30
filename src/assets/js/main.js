$('#carouselFade').carousel();
console.log("sa00");
$(".card").on({
    mouseenter: function () {
        $(this).children().show();
        console.log("hover");
    }, mouseleave: function () {
        $(".card-text").hide();
    }
});