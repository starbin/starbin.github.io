new WOW().init();

var fixmeTop = $('.the-anchor').offset().top;

$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop){
        $('.navbar').css("top", "0");
    } else {
        $('.navbar').css("top", "-100%");
    }
});