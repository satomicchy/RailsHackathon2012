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

  jQuery(function($) {
    return $('#shibuyarb').click(function() {
        window.open("http://www.facebook.com/groups/shibuya.rb/");
        return false;
    });
  });

  jQuery(function($) {
    return $('#register_osaka').click(function() {
        window.open("http://qwik.jp/minamirb/198.html");
        return false;
    });
  });

  jQuery(function($) {
    return $('#register_okinawa').click(function() {
        window.open("http://atnd.org/events/32340");
        return false;
    });
  });

  jQuery(function($) {
    return $('#register_shibuya').click(function() {
        window.open("http://www.zusaar.com/event/370005");
        return false;
    });
  });

  jQuery(function($) {
    return $('#qanda_page').click(function() {
      return location.href = "/q_and_a";
    });
  });

  jQuery(function($) {
    return $('#teams_page').click(function() {
      return location.href = "/teams";
    });
  });

  jQuery(function($) {
    return $('#report_page').click(function() {
      return location.href = "/report";
    });
  });

}).call(this);
