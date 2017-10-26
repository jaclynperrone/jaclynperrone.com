$(function(){
  var header = $(".js-site-header");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            header.addClass("header-is-reduced");
        } else {
            header.removeClass("header-is-reduced");
        }
    });
});
