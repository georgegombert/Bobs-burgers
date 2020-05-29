$(document).ready(() => {
  // close modal functionality
  $(document).click((event) => {
    console.log(event.target.id);
    if(event.target.id === "order-modal"){
      $("#order-modal").addClass("hidden");
    } else if (event.target.id === "eaten-modal"){
      $("#eaten-modal").addClass("hidden");
    }
  });
  
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

  // animation and functionality for tina
  // -----------------------------------------------------------------------------------------------------------------------
  $(".tina").mouseover(() => {
    $(".tina").attr("src", "img/tina_talk.png")
  });
  
  $(".tina").mouseleave(() => {
    $(".tina").attr("src", "img/tina.png")
  });

  $(".tina").click(() => {
    $("#order-modal").removeClass("hidden");
  });
  // -----------------------------------------------------------------------------------------------------------------------  

  // Animation and functionality for the cash register
  // -----------------------------------------------------------------------------------------------------------------------
  $(".register").mouseover(() => {
    $(".register").attr("src", "img/register-active.png")
  });
  
  $(".register").mouseleave(() => {
    $(".register").attr("src", "img/register.png")
  });

  $(".register").click(() => {
    $("#eaten-modal").removeClass("hidden");
  });
  // -----------------------------------------------------------------------------------------------------------------------
  
  // Burger display section
  // -----------------------------------------------------------------------------------------------------------------------
  function displayBurgerName(burgerId) {
    $("#burgerDisplay").addClass(`burger${burgerId}`);
    $("#burgerDisplay").removeClass(`hidden`);
  };

  function closeBurgerDisplay() {
    $("#burgerDisplay").removeClass();
    $("#burgerDisplay").addClass("hidden burger-display");
  };

  $(document).mouseover((event) =>{
    const burgerId = event.target.dataset.burgerid;

    switch(burgerId){
      case "1":
        displayBurgerName(1);
        break;
      case "2":
        displayBurgerName(2);
        break;
      case "3":
        displayBurgerName(3);
        break;
      case "4":
        displayBurgerName(4);
        break;
      case "5":
        displayBurgerName(5);
        break;
      default:
        closeBurgerDisplay();
    };
  });

  $(document).click((event) =>{
    const burgerId = event.target.dataset.burgerid;
    $(`img[data-burgerid =${burgerId}]`).addClass("hidden");
    closeBurgerDisplay();
  });
  // -----------------------------------------------------------------------------------------------------------------------

}); // end doc.ready