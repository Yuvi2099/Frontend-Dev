$(function () {
  var postCounter = 1;

  $("#add-post-btn").on("click", function () {
    postCounter++;
    var newPost = $("<article></article>");
    newPost.addClass("post");
    newPost.html("<h2>New Post " + postCounter + "</h2><p>Auto generated content.</p>");
    $("#posts-container").append(newPost);
    newPost.before("<div class='tag'>New</div>");
  });

  $("#prepend-post-btn").on("click", function () {
    var featuredPost = $("<article></article>");
    featuredPost.addClass("post");
    featuredPost.html("<h2>Featured Post</h2><p>Important announcement.</p>");
    $("#posts-container").prepend(featuredPost);
    featuredPost.after("<div class='tag'>Featured</div>");
  });

  $("#remove-last-post-btn").on("click", function () {
    $("#posts-container .post").last().prev(".tag").remove();
    $("#posts-container .post").last().remove();
  });

  $("#highlight-keyword-btn").on("click", function () {
    var keyword = $("#keyword-input").val().toLowerCase();
    $("#posts-container .post").each(function () {
      var text = $(this).text().toLowerCase();
      if (keyword.length > 0 && text.indexOf(keyword) !== -1) {
        $(this).addClass("highlight-post");
      } else {
        $(this).removeClass("highlight-post");
      }
    });
  });
});
