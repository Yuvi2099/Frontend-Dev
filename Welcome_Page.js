$(function () {
  function getGreeting() {
    var now = new Date();
    var hour = now.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }

  $("#greeting-text").text(getGreeting() + ", visitor!");

  $("#change-greeting-btn").on("click", function () {
    $("#greeting-text").text("Believe in yourself and keep moving forward.");
  });

  $("#toggle-welcome-btn").on("click", function () {
    $("#welcome-message").toggle();
  });

  $("#greeting-text").on("click", function () {
    alert("Greeting clicked");
  });
});
