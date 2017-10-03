$(function(){
  $('.gallery-list__item').click(function(){
    $('body').addClass('gallery-is-open');
    $(this).addClass('active').siblings().removeClass('active');
  });

  $('.site-header__back').click(function(){
    $('body').removeClass('gallery-is-open');
    $('.gallery-list__item').removeClass('active');
  });
});
