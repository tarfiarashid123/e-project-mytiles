// Javascript For Tile Categories Page
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.tile-card-1, .tile-card-2, .tile-card-3, .tile-card-4, .collection-card, .split-card, .material-card, .gradient-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    const cards = document.querySelectorAll('.tile-card-1, .tile-card-2, .tile-card-3, .tile-card-4, .collection-card, .split-card, .material-card, .gradient-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    const materialIcons = document.querySelectorAll('.material-icon');
    materialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1) rotate(10deg)';
        });

        icon.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    const slides = document.querySelectorAll('.about-testimonial-slide');
    const dots = document.querySelectorAll('.about-testimonial-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        index = (index + slides.length) % slides.length;

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function startSlider() {
        if (slideInterval) clearInterval(slideInterval);

        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            showSlide(index);
            startSlider();
        });
    });

    if (slides.length > 0) {
        showSlide(0);
        startSlider();
    }

    const statCounts = document.querySelectorAll('.about-stat-count');
    const statsSection = document.querySelector('.about-stats');

    function animateStats() {
        if (!statsSection || statCounts.length === 0) return;

        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            statCounts.forEach(count => {
                const fullText = count.textContent;
                const matches = fullText.match(/^(\d+)(\D*)$/);
                if (!matches) return;

                const target = parseInt(matches[1]);
                const suffix = matches[2] || '';
                const duration = 2000;
                const start = 0;
                const increment = target / (duration / 16);

                let current = start;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        clearInterval(timer);
                        current = target;
                    }
                    count.textContent = Math.floor(current) + suffix;
                }, 16);
            });

            window.removeEventListener('scroll', animateStats);
        }
    }

    if (statCounts.length > 0 && statsSection) {
        window.addEventListener('scroll', animateStats);
    }
});

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 992 && !this.classList.contains('dropdown-toggle')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            }
        });
    });
});

// Animation

AOS.init();