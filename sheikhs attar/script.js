
  const goTopBtn = document.getElementById('goTopBtn');

  window.addEventListener('scroll', () => {
    // Show button only when scrolled down more than 200px
    if (window.scrollY > 200) {
      goTopBtn.classList.add('active');
    } else {
      goTopBtn.classList.remove('active');
    }
  });

  goTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  const goBottomBtn = document.getElementById('goBottomBtn');

  window.addEventListener('scroll', () => {
    // Show button only when not near bottom
    if (window.innerHeight + window.scrollY < document.body.offsetHeight - 200) {
      goBottomBtn.classList.add('active');
    } else {
      goBottomBtn.classList.remove('active');
    }
  });

  goBottomBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  let slides = document.querySelectorAll(".slide");
let counter = 0;

// Position all slides next to each other
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Function to show current slide
const slideimg = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        slide.style.transition = "transform 3s ease-in-out"; // ✅ slide fast
    });
};

// Auto slide every 3 sec (pause included)
setInterval(() => {
    counter = (counter + 1) % slides.length; 
    slideimg();
}, 5000);   // ✅ 3s delay + ~1s sliding








const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check saved mode in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleButton.textContent = 'Switch to Light Mode';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    toggleButton.textContent = 'Switch to Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    toggleButton.textContent = 'Switch to Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});
