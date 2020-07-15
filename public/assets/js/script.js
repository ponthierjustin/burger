$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    const newBurger = {
      name: $("#new").val().trim(),
      devoured: false,
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");

      location.reload();
    });
  });
  $(".update-food").on("click", function (event) {
    var id = $(this).data("id");
    var eatBurger = $(this).data(1);

    var devouredBurger = {
      devoured: eatBurger,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredBurger,
    }).then(function () {
      console.log("changed devoured to", devouredBurger);

      location.reload();
    });
  });
});
