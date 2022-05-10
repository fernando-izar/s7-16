const body = document.getElementById("bodyId");
console.log(body);
const div = document.createElement("div");
const textNode = document.createTextNode("Hello World");
div.appendChild(textNode);
body.appendChild(div);