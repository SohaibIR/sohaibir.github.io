// Small glowing effect on cards
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  const originalBackground = card.style.background; // store original

  card.addEventListener("mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, #222, #1a1a2e)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = originalBackground || "#1a1a2e";
  });
});

// Animate progress bars when they come into view
const progressBars = document.querySelectorAll(".progress-bar");

function animateBars() {
  progressBars.forEach(bar => {
    const finalWidth = bar.getAttribute("data-width"); // store width in HTML
    bar.style.width = "0"; // reset
    setTimeout(() => {
      bar.style.width = finalWidth;
    }, 300);
  });
}

// IntersectionObserver to trigger on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateBars();
      observer.disconnect(); // run only once
    }
  });
}, { threshold: 0.3 });

if (progressBars.length) {
  observer.observe(progressBars[0].parentElement);
}
