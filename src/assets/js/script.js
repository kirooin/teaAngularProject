$(document).ready(function () {

  $('.single-item').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });

  $(function () {
    var icons = {
      header: "custom-header-icon",
      activeHeader: "custom-active-header-icon"
    };
    $("#accordion").accordion({
      icons: icons,
      heightStyle: "content"
    });
    $("#toggle").button().on("click", function () {
      if ($("#accordion").accordion("option", "icons")) {
        $("#accordion").accordion("option", "icons", null);
      } else {
        $("#accordion").accordion("option", "icons", icons);
      }
    });
  });


})

