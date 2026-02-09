const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 4000);

showSlide(index);

// Scroll Down Button - Scroll to bottom
const scrollDownBtn = document.getElementById("scrollDownBtn");
scrollDownBtn.addEventListener("click", function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

// Scroll Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  // Show/Hide Scroll Top Button
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }

  // Show/Hide Scroll Down Button
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.scrollHeight;

  if (scrollPosition >= pageHeight - 50) {
    // Close to bottom → hide scroll down
    scrollDownBtn.style.display = "none";
  } else {
    scrollDownBtn.style.display = "block";
  }
};

// Scroll to Top
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

