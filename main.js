// ====== Splash Animation ======
setTimeout(() => {
  document.querySelector(".left-door").style.transform = "translateX(-100%)";
  document.querySelector(".right-door").style.transform = "translateX(100%)";
  document.getElementById("logoBox").style.animation = "fadeOut 1s forwards";
}, 2000);

setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("main").classList.add("show");
  document.body.style.overflow = "auto";
}, 4000);

// ====== Smooth Scroll for Navbar ======
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ====== Scroll Reveal Animation ======
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".about, .hero, .about-text, .about-img").forEach(el => {
  observer.observe(el);
});

const offersSelect = document.getElementById('offers');
const offerInfo = document.getElementById('offer-info');

offersSelect.addEventListener('change', () => {
  const selectedOption = offersSelect.options[offersSelect.selectedIndex];
  offerInfo.textContent = selectedOption.dataset.summary;
});

// ====== Hamburger Menu Toggle ======
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
