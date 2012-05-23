(function() {

  jQuery(function($) {
    return $('#home_page').click(function() {
      return location.href = "/";
    });
  });

  jQuery(function($) {
    return $('#about_page').click(function() {
      return location.href = "/about";
    });
  });

  jQuery(function($) {
    return $('#schedule_page').click(function() {
      return location.href = "/schedule";
    });
  });

}).call(this);
