$(function(){
  var totalImages = $('ul.gallery-list li.js-gallery-item').length-1;
  var currentIndex = 0;

  function showSelectedImage() {
    $('#'+currentIndex).addClass('active').siblings().removeClass('active');
  }

  $('.js-gallery-item').each(function(){
    var index = $(this).index();
    $(this).attr('id',index);
  });

  $('.js-gallery-prev').click(function(){
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalImages;
    }
    showSelectedImage();
  });

  $('.js-gallery-next').click(function(){
   currentIndex++;
    if (currentIndex > totalImages) {
      currentIndex = 0;
    }
    showSelectedImage();
  });

  $('.js-gallery-item').click(function(){
    var viewport = $(window).width();

    if (viewport >= 768) {
      window.scrollTo(0,0);
    }

    currentIndex = $(this).index();

    $('body').addClass('gallery-is-open');
    showSelectedImage();
  });

  $('.js-gallery-close').click(function(){
    $('body').removeClass();
    $('.js-gallery-item').removeClass('active');
  });
});
