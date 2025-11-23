$(function () {
  var banners = $(".banner");
  var currentIndex = 0;

  $("#hide-banners").on("click", function () {
    banners.hide();
  });

  $("#show-banners").on("click", function () {
    banners.show();
  });

  $("#slide-toggle-banners").on("click", function () {
    banners.slideToggle();
  });

  $("#fade-toggle-banners").on("click", function () {
    banners.fadeToggle();
  });

  setInterval(function () {
    banners.hide();
    $(banners[currentIndex]).fadeIn();
    currentIndex = (currentIndex + 1) % banners.length;
  }, 5000);
});
