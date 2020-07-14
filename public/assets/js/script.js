$(function() {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    const newBurger = {
      name: $("#new").val().trim(),
      devoured: false
    };
  
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function () {
      console.log("created new burger");
      
      location.reload();
    });
  });
  
})