app.hookupScrollShadow = function() {

  var  mn = $(".navbar-fixed-top");
  var  ns = "nav-shadow";

  $(window).scroll(function() {

    if( $(this).scrollTop() > 45 ) {
      mn.addClass(ns);
    } else {
      mn.removeClass(ns);
    }
  });

} 