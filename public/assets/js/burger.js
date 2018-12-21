$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var devouredState = $(this).attr("data-devoured");
    console.log("devoured state", devouredState);
    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function (changeBurger) {
      console.log("changed burger", changeBurger);
      // Reload 
      location.reload();
    }
    );
  });
  $(".change-make").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newState = {
      devoured: false
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function (changeBurger) {
      console.log("changed burger", changeBurger);
      // Reload 
      location.reload();
    }
    );
  });
  $(".create-form").on("submit", function (event) {
    // preventDefault on a submit event.
    event.preventDefault();

    var name = $('#name').val().trim();
    // var newBurger = {
    //   name: name,
    //   devoured: 0
    // };
    // console.log("new burger", newBurger);

    // $.ajax("/api/burgers", {
    //   type: "POST",
    //   data: newBurger
    // }).then(function (data) {
    //   console.log("I am callling ajax", data)
    //   location.reload();
    // }).catch(function(err){
    //   console.log(err);
    // })
    $.ajax("/api/burgers/"+name, {method : "POST"}).then( function(res){
      console.log(res);
      location.reload();
    })
  });

  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function () {
      console.log("deleted burger", id);
      location.reload();
    });
  });
});
