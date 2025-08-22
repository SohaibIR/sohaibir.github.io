// Tiny effect: typewriter intro
const header = document.querySelector(".game-header h1");
let text = header.innerText;
let i = 0;
header.innerText = "";

function typeWriter() {
  if (i < text.length) {
    header.innerText += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();
