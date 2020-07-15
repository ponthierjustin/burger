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
    const id = $(this).data("id");
    const eatBurger = $(this).data(1);

    const devouredBurger = {
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
