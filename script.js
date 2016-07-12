// Animate scrolling with jQuery
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        console.log(target.selector);
        
        $('html, body').animate({
          scrollTop: target.offset().top -240
        }, 1000);
        return false;
      }
    }
  });
});