// Starry animated background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];
const numStars = 150;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  stars = Array.from({ length: numStars }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5,
    s: 0.1 + Math.random() * 0.2,
  }));
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.s;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(animateStars);
}
animateStars();

// Scroll-triggered fade-up animations
const fadeEls = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });
fadeEls.forEach(el => observer.observe(el));
