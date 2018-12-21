$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var id = $(this).data("idr");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function () {
      console.log("changed burger", changeBurger);
      // Reload 
      location.reload();
    }
    );
  });

  $(".create-form").on("submit", function (event) {
    // preventDefault on a submit event.
    event.preventDefault();

    var name = $('[name-burger-name]').val().trim();
    if (name !== "") {
      var newBurger = {
        name: name
      };
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function () {
        location.reload();
      });
    } else {

      $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(function () {
          console.log("deleted burger", id);
          location.reload();
        }
        );
      });
 
