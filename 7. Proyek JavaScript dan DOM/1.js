const output = document.getElementById("appendThis");
const debug = document.getElementsByClassName("debug");
const inputValue = document.getElementById("inputValue");

function run(){
  let answer = "";
  let value = inputValue.value;
  const paragraph = document.createElement("p");

  if (value == 0){
    answer = "invalid Input";
    paragraph.style.color = "red";
  } else {
    if(value % 3 == 0 || value % 5 == 0){
      if(value % 3 == 0){
        answer += "Fizz";
      } 

      if(value % 5 == 0){
        answer += "Buzz";
      }

      answer += "!";
    } else {
      answer = value;
    }
  }

  paragraph.innerHTML = answer;

  output.append(paragraph);
  // debug[0].innerHTML = inputValue.value;
}