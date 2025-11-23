$(function () {
  var notificationsEnabled = false;

  $("#subscribe-btn").on("click", function () {
    notificationsEnabled = true;
    $("#status-message").text("Notifications enabled");
  });

  $("#unsubscribe-btn").on("click", function () {
    notificationsEnabled = false;
    $("#status-message").text("Notifications disabled");
  });

  $("#topics-list").on("click", ".topic", function () {
    if (!notificationsEnabled) return;
    $(".topic").removeClass("active-topic");
    $(this).addClass("active-topic");
    $("#status-message").text("Subscribed to " + $(this).data("name"));
  });

  $("#add-topic-btn").on("click", function () {
    var newTopicName = $("#new-topic-input").val().trim();
    if (newTopicName.length === 0) return;
    var newTopic = $("<div></div>");
    newTopic.addClass("topic");
    newTopic.attr("data-name", newTopicName);
    newTopic.text(newTopicName);
    $("#topics-list").append(newTopic);
    $("#new-topic-input").val("");
    $("#status-message").text("New topic added: " + newTopicName);
  });

  $("#remove-sports-click").on("click", function () {
    var sportsTopic = $(".topic[data-name='Sports']");
    sportsTopic.off("click");
    sportsTopic.removeClass("active-topic");
    $("#status-message").text("Sports topic click disabled");
  });
});
