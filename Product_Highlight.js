$(function () {
  $(".product").on("click", function () {
    $(".product").removeClass("highlight-product");
    $(this).addClass("highlight-product");
    var stock = $(this).data("stock");
    if (stock === "out") {
      alert("This product is out of stock.");
    }
  });

  $(".product").hover(
    function () {
      $(this).find(".product-details").show();
    },
    function () {
      $(this).find(".product-details").hide();
    }
  );

  $(".favorite-icon").on("click", function (event) {
    event.stopPropagation();
    $(this).toggleClass("selected");
  });

  $("[data-discount='true']").each(function () {
    $(this).closest(".product").addClass("discounted");
  });
});
