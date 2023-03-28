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

