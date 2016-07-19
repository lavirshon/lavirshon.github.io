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


var header = document.getElementById("header");
// Attach a listener to the window
window.onscroll = function(e) {
  
  // Get the pageYOffset
  var pageOffset = window.pageYOffset;
  
  // If the offset is more than 200
  if ( pageOffset > 200 ) {
    // Add the class name
    header.classList.add("collapsed");
  // If the offset is less than 200 
  } else {
    // Remove the class name
    header.classList.remove("collapsed");   
  };
  
};