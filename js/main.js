$(document).ready(function(){









$('.next-arrow').on('click', function() {
  $('.responsive').slick('slickNext');
});

$('.prev-arrow').on('click', function() {
  $('.responsive').slick('slickPrev');
});


$(document).ready(function(){

var helpers = {
  addZeros: function (n) {
    return (n > 10) ? '' + n : '' + n;
  }
};

function sliderInit() {
  var $slider = $('.responsive');
  $slider.each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    });

    if ($(this).find('.item').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }

    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

  });
  
//   $('.slick-next').on('click', function () {
//     console.log('test');
//     $('.slider-holder').slick('slickGoTo', 5);
// });
};

sliderInit();
  });


});