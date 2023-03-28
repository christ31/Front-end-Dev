// Get all elements with class "js-scroll"
const scrollElements = document.querySelectorAll(".js-scroll");

// Get boolean value if elementInView
const elementInView = (el) => {

  // elementTop is the distance between the top of the element to the top of the page
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight/2 || document.documentElement.clientHeight/2)
  );
};

// Get boolean value if elementOutView
const elementOutofView = (el) => {

  // elementTop is the distance between the top of the element to the top of the page
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// Add class scrolled on an element
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

// Hide clas scrolled on an element
const hideScrollElement = (element) => {
  // element.classList.remove("scrolled");
};

// ! The main
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// let runInterval = setInterval(runDebug, 250);

function runDebug(){
  document.getElementById('dbg-window-width').innerHTML = "Width: " + window.innerHeight;
}

function showDebug(){
  document.getElementById('dbg').classList.remove("hide");
}

// ! Get Window Object
console.log("Hai");
let path = window.location.pathname;
let navProduct = document.getElementById("navProducts");
let navStore = document.getElementById("navStore");
let navContact = document.getElementById("navContact");


// ! Activate orange background if url = ...
if (path.includes("index.html")){
  console.log("Sedang di index.html");
} else if(path.includes("menu.html")){
  console.log("Sedang di detail.html");
  navProduct.classList.add("active");

} else if(path.includes("findus.html")){
  console.log("Sedang di findUs.html")
  navStore.classList.add("active");
} else if(path.includes("detail.html")){
  navProduct.classList.add("active");
} else if(path.includes("help.html")){
  navContact.classList.add("active");
} else {
  console.log("Tidak sedang dimana-mana");
}

// ! Filter menu.html based on URL
let searchParam = window.location.search;
let linkCoffeeBased = document.getElementsByClassName("sidebar-item");

let arenLatte = document.getElementsByClassName("menu-main-card-link")[0];
let cafeLatte = document.getElementsByClassName("menu-main-card-link")[1];
let caramelLatte = document.getElementsByClassName("menu-main-card-link")[2];
let americano = document.getElementsByClassName("menu-main-card-link")[3];
let cappucino = document.getElementsByClassName("menu-main-card-link")[4];
let butterscotch = document.getElementsByClassName("menu-main-card-link")[5];


if (searchParam.includes("q=coffee")){
  linkCoffeeBased[0].classList.add("selected");
  butterscotch.classList.add("hide");
} else if(searchParam.includes("q=non-coffee")){
  linkCoffeeBased[1].classList.add("selected");

  arenLatte.classList.add("hide");
  cafeLatte.classList.add("hide");

} else if(searchParam.includes("q=tea")){
  linkCoffeeBased[2].classList.add("selected");

  arenLatte.classList.add("hide");
  cafeLatte.classList.add("hide");
  caramelLatte.classList.add("hide");
  americano.classList.add("hide");
  cappucino.classList.add("hide");
}

//! Accordion
const btnAccordion = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");
const arrowImg = document.getElementsByClassName("accordion-img");

for(let i = 0; i < btnAccordion.length; i++){
  btnAccordion[i].addEventListener('click', ()=>{
    let thisPanel = panel[i];
    let arrowImgIdx = arrowImg[i]

    if (thisPanel.style.display === "block"){
      thisPanel.style.display = "none";
      arrowImgIdx.style.transform = "rotate(180deg)";
    } else {
      thisPanel.style.display = "block";
      arrowImgIdx.style.transform = "rotate(90deg)";
    }
  })
}