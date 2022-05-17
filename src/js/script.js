$(document).ready(function(){
  $('.slider').slick({
    dots: true,
	  slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing:'cubic-bezier(0.42,0,0.58,1)',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }}
    ]
  });
});