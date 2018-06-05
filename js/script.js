$(document).ready(function() {
   $('.on-off span').on('click', function() {
      $('.power-off').toggleClass('power-on');
      $('.screen-inner-logo').toggleClass('inner-logo-end');
   });
});