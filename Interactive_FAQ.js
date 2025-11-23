$(function () {
  $(".question").on("click", function () {
    $(this).next(".answer").toggle();
  });

  $(".question").hover(
    function () {
      $(this).css("color", "blue");
    },
    function () {
      $(this).css("color", "black");
    }
  );

  $(".question").on("dblclick", function () {
    $(".answer").hide();
  });

  $(".question-input").on("focus", function () {
    $(this).closest(".faq-item").css("background-color", "#f1f2f6");
  });

  $(".question-input").on("blur", function () {
    $(this).closest(".faq-item").css("background-color", "transparent");
  });
});
