/*funcion carrusel*/

$('.carousel.carousel-slider').carousel({fullWidth: true});


$(document).ready(function() {
$(window).scroll(function() {
        $('#nav-porta').toggleClass('navbar', $(this).scrollTop() > $('#nav-porta').height());
      });
});