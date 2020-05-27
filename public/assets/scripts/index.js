$(document).ready(() => {
  
  $("#newBurger").click(() => {
    event.preventDefault();
    
    const burgerName = {
      name: $("#burgerName").val().trim()
    };

    $.ajax({
      url: "/api/burgers",
      type: "POST",
      data: burgerName
    })
    .then(() => {
      location.reload();
    });
  });
  
  $("#burgerList").click((event) => {
    const burgerId = event.target.dataset.id;

    $.ajax({
      url: `api/burgers/${burgerId}`,
      type: "PUT"
    })
    .then(() => location.reload());
  });

}); // end doc.ready