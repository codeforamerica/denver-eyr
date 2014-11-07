  app.hideTitle = function() {

  var  mn = $(".navbar-brand");
  var  st = "show-title";

  $(window).scroll(function() {

    if( $(this).scrollTop() > 275 ) {
      mn.addClass(st);
    } else {
      mn.removeClass(st);
    }
  });

}