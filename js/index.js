// Hero Slider functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


let slideInterval = setInterval(() => plusSlides(1), 5000);


document.querySelector('.slider-container').addEventListener('mouseenter', () => {
  clearInterval(slideInterval);
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => plusSlides(1), 5000);
});

// Accordion Functionality
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const currentlyActive = document.querySelector('.accordion-item.active');

    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove('active');
      currentlyActive.querySelector('.accordion-content').style.maxHeight = null;
    }

    item.classList.toggle('active');

    const content = item.querySelector('.accordion-content');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});
document.querySelector('.accordion-item').classList.add('active');
document.querySelector('.accordion-content').style.maxHeight =
  document.querySelector('.accordion-content').scrollHeight + 'px';

// Category Slider Functionality
const categoryCards = document.querySelectorAll('.category-card');
const categoryDotsContainer = document.getElementById('category-dots');
let categoryCurrentSlide = 0;

function showCategorySlide(index) {
  categoryCards.forEach(card => card.classList.remove('active'));
  categoryDotsContainer.querySelectorAll('.category-dot').forEach(dot => dot.classList.remove('active'));
  categoryCards[index].classList.add('active');
  categoryDotsContainer.children[index].classList.add('active');
}

function changeCategorySlide(step) {
  categoryCurrentSlide += step;
  if (categoryCurrentSlide < 0) categoryCurrentSlide = categoryCards.length - 1;
  if (categoryCurrentSlide >= categoryCards.length) categoryCurrentSlide = 0;
  showCategorySlide(categoryCurrentSlide);
}

categoryCards.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('category-dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    categoryCurrentSlide = index;
    showCategorySlide(index);
  });
  categoryDotsContainer.appendChild(dot);
});

// Trending Slider Functionality
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.trending-slider');
  const cards = document.querySelectorAll('.trending-card');
  const prevBtn = document.querySelector('.trending-prev');
  const nextBtn = document.querySelector('.trending-next');
  const dotsContainer = document.querySelector('.trending-dots');

  let currentIndex = 0;
  const cardCount = cards.length;
  let cardWidth = cards[0].offsetWidth + 25;


  for (let i = 0; i < Math.ceil(cardCount / 3); i++) {
    const dot = document.createElement('div');
    dot.classList.add('trending-dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.trending-dot');

  window.addEventListener('resize', function () {
    cardWidth = cards[0].offsetWidth + 25;
    goToSlide(currentIndex);
  });

  nextBtn.addEventListener('click', function () {
    if (currentIndex < Math.ceil(cardCount / 3) - 1) {
      currentIndex++;
      goToSlide(currentIndex);
    }
  });

  prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex--;
      goToSlide(currentIndex);
    }
  });

  function goToSlide(index) {
    currentIndex = index;
    const scrollPosition = currentIndex * cardWidth * 3;

    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === Math.ceil(cardCount / 3) - 1;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const productCards = document.querySelectorAll('.product-card');
  const viewButtons = document.querySelectorAll('.view-btn');

  // Add click event to view buttons
  viewButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation(); // Prevent card click event
      const productName = this.closest('.product-info').querySelector('h3').textContent;
      alert(`Viewing details for: ${productName}`);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}); 