$(function () {
  var usedEmails = [];

  function isValidEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  $("#registration-form").on("submit", function (event) {
    event.preventDefault();
    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    var password = $("#password-input").val().trim();
    var valid = true;

    $("#name-input, #email-input, #password-input").removeClass("error-border");
    $("#form-message").removeClass("success-message").removeClass("error-message");

    if (name.length === 0) {
      $("#name-input").addClass("error-border");
      valid = false;
    }

    if (!isValidEmail(email) || usedEmails.indexOf(email) !== -1) {
      $("#email-input").addClass("error-border");
      valid = false;
    }

    if (password.length < 8) {
      $("#password-input").addClass("error-border");
      valid = false;
    }

    if (!valid) {
      $("#form-message").addClass("error-message").text("Please fix the highlighted fields.");
    } else {
      usedEmails.push(email);
      $("#form-message").addClass("success-message").text("Registration successful.");
      $("#registration-form")[0].reset();
    }
  });
});
