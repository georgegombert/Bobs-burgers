function newBurger() {
  console.log("clicked");
  event.preventDefault();

  $.ajax({
    url: "/api/burgers",
    type: "POST"
    })
    .then(() => {
      console.log ("worked");
      location.reload();
    });
};