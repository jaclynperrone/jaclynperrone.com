$(function(){
  $('.js-gallery-item').click(function(){
    $('body').addClass('gallery-is-open');
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.js-gallery-close').click(function(){
    $('body').removeClass('gallery-is-open');
    $('.js-gallery-item').removeClass('active');
  });
});
