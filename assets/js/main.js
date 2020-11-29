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

var btn = $('#back-btn');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
        });

        btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });