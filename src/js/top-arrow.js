$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.top-arrow').fadeIn();
  } else {
    $('.top-arrow').fadeOut();
  }
});
$(document).ready(function () {
  $('.top-arrow').click(function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
});