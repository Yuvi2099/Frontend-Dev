$(function () {
  $(".manager").on("click", function () {
    var managerId = $(this).data("manager");
    $(".employee").removeClass("highlight");
    $(".employee[data-manager='" + managerId + "']").addClass("highlight");
  });

  $(".employee").hover(
    function () {
      $(this).find(".contact-info").show();
    },
    function () {
      $(this).find(".contact-info").hide();
    }
  );

  $(".department-title").on("click", function () {
    $(this).parent(".department").children(".employee, .manager").toggleClass("highlight");
  });

  $("#random-employee-btn").on("click", function () {
    var employees = $(".employee");
    employees.removeClass("highlight");
    var randomIndex = Math.floor(Math.random() * employees.length);
    var randomEmployee = employees.eq(randomIndex);
    randomEmployee.addClass("highlight");
    randomEmployee.siblings(".employee").addClass("highlight");
  });

  $("#toggle-teams-btn").on("click", function () {
    var departments = $(".department");
    departments.each(function () {
      var children = $(this).children(".manager, .employee");
      children.toggle();
    });
  });
});
