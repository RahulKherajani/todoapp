// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//Click on Garbage Can to delete Todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//Adding New Todos
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

//Toggle Input
$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
