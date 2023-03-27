// Manipulate the value of 
document.getElementById("demo").innerHTML = "Hello World!";

const divDemo = document.getElementById("demo");
const paragraph = document.createElement("p");
paragraph.innerHTML = "Hello World!2";
divDemo.append(paragraph);

const deletePara = document.getElementById("delete");
deletePara.remove();

document.getElementById("myImage").src = "2.png";

const valueInput = document.getElementById("name").value;
console.log(valueInput);

divDemo.style.color = "green";

// Button Function
function changeButton(obj) {
  obj.innerHTML = "Ooops!";
  obj.style.color = "red";
}

