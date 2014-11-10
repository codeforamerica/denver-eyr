  app.hideTitle = function() {

  var  mn = $(".navbar-brand");
  var  st = "show-title";
  var  jh = $(".jumbotron").outerHeight();

  $(window).scroll(function() {

    if( $(this).scrollTop() > jh-52 ) {
      mn.addClass(st);
    } else {
      mn.removeClass(st);
    }
  });

}