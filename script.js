const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slider .slide');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Clear active class from all dots and add to the clicked one
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    // Move to the corresponding slide
    slides.forEach(slide => slide.style.animation = 'none'); // Reset animations
    slides[index].style.animation = `slider 12.5s infinite`;
    slides[index].style.animationDelay = '0s'; // Reset delay
  });
});
