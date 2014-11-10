app.hookupScrollShadow = function() {

  var  mn = $(".navbar-fixed-top");
  var  ns = "nav-shadow";
  var  jh = $(".jumbotron").outerHeight();

  $(window).scroll(function() {

    if( $(this).scrollTop() > (jh-52) ) {
      mn.addClass(ns);
    } else {
      mn.removeClass(ns);
    }
  });

} 