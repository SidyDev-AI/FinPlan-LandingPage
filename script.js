// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const animateOnScroll = () => {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Carrossel dinâmico
const track = document.getElementById("carousel-track");
const slides = track.children;
let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 3000); // troca a cada 4s