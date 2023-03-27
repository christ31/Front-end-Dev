const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModalButton");

const closeIcon = document.getElementById("closeModalIcon");
const debug = document.getElementById("debug");

// Lakukan ini ketika tombol open ditekan
// addEventListener(type: , listener/function)
openButton.addEventListener('click', ()=> {
  modal.style.display = "block";
})

closeIcon.addEventListener('click', ()=> {
  modal.style.display = "none";
})

//! Accordion
const btnAccordion = document.getElementsByClassName("accordion");
const panel = document.getElementsByClassName("panel");


for(let i = 0; i < btnAccordion.length; i++){
  btnAccordion[i].addEventListener('click', ()=>{
    let thisPanel = panel[i];

    debug.innerHTML = "hey " + thisPanel.style.display;

    if (thisPanel.style.display === "block"){
      thisPanel.style.display = "none";
    } else {
      thisPanel.style.display = "block";
    }

  })
}

// debug.innerHTML = btnAccordion.length  

let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slider-item");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);