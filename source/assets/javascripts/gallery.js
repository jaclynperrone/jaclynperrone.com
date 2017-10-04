$(function(){
  $('.js-gallery-prev').click(function(){
    var activeGallery = $('.js-gallery-item.active');

    activeGallery.removeClass('active').prev().addClass('active');

    $('body').removeClass('gallery-shows-last');

    if ($('.js-gallery-item:first-child').hasClass('active')) {
      $('body').addClass('gallery-shows-first');
    }
  });

  $('.js-gallery-next').click(function(){
    var activeGallery = $('.js-gallery-item.active');

    activeGallery.removeClass('active').next().addClass('active');

    $('body').removeClass('gallery-shows-first');

    if ($('.js-gallery-item:last-child').hasClass('active')) {
      $('body').addClass('gallery-shows-last');
    }
  });

  $('.js-gallery-item').click(function(){
    window.scrollTo(0,0);

    $('body').addClass('gallery-is-open');

    $(this).addClass('active').siblings().removeClass('active');

    if ($(this).is(':first-child')) {
      $('body').addClass('gallery-shows-first');
    }

    if ($(this).is(':last-child')) {
      $('body').addClass('gallery-shows-last');
    }
  });

  $('.js-gallery-close').click(function(){
    $('body').removeClass();
    $('.js-gallery-item').removeClass('active');
  });
});
