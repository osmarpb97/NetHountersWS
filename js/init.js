(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(window).scroll(function () {
  if ($("#menu").offset().top > 50) {
    $("#menu").addClass("white");
  } else {
    $("#menu").removeClass("white");
  }
});
$(".boton ").sideNav();
$(".boton1").sideNav({ edge: 'right' });

$(document).ready(function () {
  $('.slider').slider({});
});