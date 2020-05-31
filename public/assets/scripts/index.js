let activeBurgers ;

async function createNewBurger() {
  if(activeBurgers.length >= 5){
    alert("too many burgers. Please eat one before continuing to order");
  } else {
    const burgerName = {
      name: $("#burgerName").val().trim()
    };
    await $.ajax({
      url: "/api/burgers",
      type: "POST",
      data: burgerName
    });
    
    const result = await $.ajax({
      url: `api/burgers`,
      type: "get"
    });
    location.reload();
  };
};

async function getActiveBurgers() {
  activeBurgers = await $.ajax({
    url:"/api/active-burgers",
    type: "GET"
  });
  // console.log(activeBurgers);
};

async function displayBurgers() {
  await getActiveBurgers();
  for(index in activeBurgers){
    console.log((parseInt(index)+1));
    $(`img[data-position =${parseInt(index)+1}]`).removeClass("hidden");
  };
};

$(document).ready(() => {
  displayBurgers();

  // close modal functionality
  $(document).click((event) => {
    console.log(event.target.id);
    if(event.target.id === "order-modal"){
      $("#order-modal").addClass("hidden");
    } else if (event.target.id === "eaten-modal"){
      $("#eaten-modal").addClass("hidden");
    }
  });
  
  $("#newBurger").click(async function() {
    event.preventDefault();
    await createNewBurger();
    getActiveBurgers();
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
    console.log(activeBurgers);
    $("#eaten-modal").removeClass("hidden");
  });
  // -----------------------------------------------------------------------------------------------------------------------
  
  // Burger display section
  // -----------------------------------------------------------------------------------------------------------------------
  function displayBurgerName(burgerPosition) {
    $("#burgerDisplay").addClass(`burger${burgerPosition}`);
    $("#burgerDisplay").removeClass(`hidden`);
    $("#burgerDisplay").text(activeBurgers[burgerPosition-1].burger_name);
  };

  function closeBurgerDisplay() {
    $("#burgerDisplay").removeClass();
    $("#burgerDisplay").addClass("hidden burger-display");
  };

  $(document).mouseover((event) =>{
    const burgerPosition = event.target.dataset.position;

    switch(burgerPosition){
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
    const burgerPosition = event.target.dataset.position;
    $(`img[data-position =${burgerPosition}]`).addClass("hidden");
    closeBurgerDisplay();
  });

  function eatBurger(burgerId) {
    $.ajax({
      url: `api/burgers/${burgerId}`,
      type: "PUT"
    })
    .then(() => location.reload());
  };

  // -----------------------------------------------------------------------------------------------------------------------

}); // end doc.ready



async function test() {
  displayBurgers();
}

test();