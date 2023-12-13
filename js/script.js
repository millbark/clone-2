$(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('header').find('.header-top').hide();
      $('.header-bottom').css({top:0});
    }else{
      $('header').find('.header-top').show();
      $('.header-bottom').css({top:85});
    }
  });
  
 $('.slide ul').slick({
  autoplay: true
});
$('.banner-slide').slick({
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
	$('.slide .btn-play').click(function() {
		if (sw == true) {
			$(this).addClass('on');
			$('.visual-slider').slick('slickPause');
		} else {
			$(this).removeClass('on');
			$('.visual-slider').slick('slickPlay');
		}

		sw = !sw;
	});
});//ready