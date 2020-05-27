$(document).ready(() => {
  
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
  
  $("#burgerList").click((event) => {
    console.log(event.target.dataset.id);
  });

}); // end doc.ready