// Small glowing effect on cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #222, #1a1a2e)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.background = "#1a1a2e";
  });
});
