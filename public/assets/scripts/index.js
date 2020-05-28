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
    .then(() => location.reload());
  });
  
  $("#burgerList").click((event) => {
    const burgerId = event.target.dataset.id;

    $.ajax({
      url: `api/burgers/${burgerId}`,
      type: "PUT"
    })
    .then(() => location.reload());
  });

  $(".tina").mouseover(() => {
    $(".tina").attr("src", "img/tina_talk.png")
  });
  
  $(".tina").mouseleave(() => {
    $(".tina").attr("src", "img/tina.png")
  });
  $(".tina").click(() => {
    $("#order-modal").removeClass("hidden");
  })

}); // end doc.ready