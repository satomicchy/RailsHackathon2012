(function() {

  jQuery(function($) {
    return $('#info_page').click(function() {
      return location.href = "/information";
    });
  });

  jQuery(function($) {
    return $('#about_page').click(function() {
      return location.href = "/";
    });
  });

  jQuery(function($) {
    return $('#schedule_page').click(function() {
      return location.href = "/schedule";
    });
  });

  jQuery(function($) {
    return $('#minamirb').click(function() {
        window.open("http://qwik.jp/minamirb/");
        return false;
    });
  });

  jQuery(function($) {
    return $('#okinawarb').click(function() {
        window.open("http://qwik.jp/okinawarb/");
        return false;
    });
  });

}).call(this);
