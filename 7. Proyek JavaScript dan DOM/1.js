const divDemo = document.getElementById("demo");
const paragraph = document.createElement("p");
paragraph.innerHTML = "Hello World!2";
divDemo.append(paragraph);

const debug = document.getElementsByClassName("debug");
const inputValue = document.getElementById("inputValue");

function run(){
  // debug[0].innerHTML = "Test";
  debug[0].innerHTML = inputValue.value;

  

}