// variable holds the information for all the burgers that are currently displayed on the counter
let activeBurgers ;

// displays welcome if person has never visited the site
function displayWelcome() {
  const visited = localStorage.getItem("visited");
  if(!visited){
    $("#welcome").removeClass("hidden");
    localStorage.setItem("visited", "true");
  };
};

async function createNewBurger() {
  // wont let you order another burder if the counter is already full of burgers (5 burgers)
  //makes Tina tell you off for ordering too much
  if(activeBurgers.length >= 5){
    $("#order-modal").addClass("hidden");
    $(".speech-tina").removeClass("hidden");
    $(".tina").attr("src", "img/tina_talk.png")
    setTimeout(() => {
      $(".speech-tina").addClass("hidden");
      $(".tina").attr("src", "img/tina.png")
    },4000);
  } else { // update the burder database and reload page
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

// gets all burgers that have not been devoured from the database
async function getActiveBurgers() {
  activeBurgers = await $.ajax({
    url:"/api/active-burgers",
    type: "GET"
  });
};

// displays burger images according to how many uneaten burgers there are
async function displayBurgers() {
  await getActiveBurgers();
  for(index in activeBurgers){
    $(`img[data-position =${parseInt(index)+1}]`).removeClass("hidden");
  };
};

// dynamically adds name to the burder when you hover over it
function displayBurgerName(burgerPosition) {
  $("#burgerDisplay").addClass(`burger${burgerPosition}`);
  $("#burgerDisplay").removeClass(`hidden`);
  $("#burgerDisplay").text(activeBurgers[burgerPosition-1].burger_name);
};

function closeBurgerDisplay() {
  $("#burgerDisplay").removeClass();
  $("#burgerDisplay").addClass("hidden burger-display");
};

// updates burger to eaten in database
function eatBurger(burgerId) {
  $.ajax({
    url: `api/burgers/${activeBurgers[burgerId-1].id}`,
    type: "PUT"
  })
  .then(() => location.reload());
};

$(document).ready(() => {
  displayWelcome(); 
  displayBurgers();


  // close modal functionality
  $(document).click((event) => {
    if(event.target.id === "order-modal"){
      $("#order-modal").addClass("hidden");
    } else if (event.target.id === "eaten-modal"){
      $("#eaten-modal").addClass("hidden");
    } else if (event.target.id === "welcome"){
      $("#welcome").addClass("hidden");
    }
  });
  
  // order button
  $("#newBurger").click(async function() {
    event.preventDefault();
    await createNewBurger();
    getActiveBurgers();
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

  // eat burger if clicked on
  $(document).click((event) =>{
    const burgerPosition = event.target.dataset.position;
    $(`img[data-position =${burgerPosition}]`).addClass("hidden");
    eatBurger(burgerPosition);
    closeBurgerDisplay();
  });
  // -----------------------------------------------------------------------------------------------------------------------

}); // end doc.ready