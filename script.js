let currentSlide = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.hero-img');

function updateCarousel() {
  const offset = -currentSlide * 100;
  track.style.transform = `translateX(${offset}%)`;
}

document.getElementById("prevSlide").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

document.getElementById("nextSlide").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}, 4000);

// Add to cart functionality
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartTotal = 0;

addToCartButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    cartTotal++;
    cartCount.textContent = cartTotal;
  });
});
