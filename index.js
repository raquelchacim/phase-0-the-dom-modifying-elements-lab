const element = document.getElementById("main");
element.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerText = "Raquel is the champion!";
document.body.appendChild(newHeader);
