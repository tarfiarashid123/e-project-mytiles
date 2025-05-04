document.addEventListener('DOMContentLoaded', function() {
    const companyCoords = [24.8718, 67.0679];
    const contactMap = L.map('contactMap').setView(companyCoords, 15);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(contactMap);
    
    // Add a marker for the company location with custom icon
    const companyMarker = L.marker(companyCoords, {
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        })
    }).addTo(contactMap)
    .bindPopup('<b>Our Location</b><br>Tariq Road, Karachi')
    .openPopup();
    
    // Try to get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const userCoords = [position.coords.latitude, position.coords.longitude];
                
                // Add marker for user's location
                const userMarker = L.marker(userCoords, {
                    icon: L.icon({
                        iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
                        iconSize: [32, 32],
                        iconAnchor: [16, 32]
                    })
                }).addTo(contactMap)
                .bindPopup('<b>Your Location</b>');
                
                // Fit map to show both locations
                const bounds = L.latLngBounds([userCoords, companyCoords]);
                contactMap.fitBounds(bounds, { padding: [50, 50] });
                
                // Add a line between user and company
                L.polyline([userCoords, companyCoords], {
                    color: '#3498db',
                    dashArray: '5, 5',
                    weight: 2
                }).addTo(contactMap);
            },
            function(error) {
                // Geolocation failed or was denied - just show company location
                console.log('Geolocation not available:', error.message);
            }
        );
    } else {
        console.log('Geolocation is not supported by this browser');
    }
    
    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Email link handler (though the mail to: should work directly)
    const emailLinks = document.querySelectorAll('.contact-email-link');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Additional tracking could be added here
            console.log('Email link clicked');
        });
    });
    
    // Add smooth animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.contact-info-card, .contact-form, .contact-map-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    const animatedElements = document.querySelectorAll('.contact-info-card, .contact-form, .contact-map-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    // Trigger once on load in case elements are already in view
    animateOnScroll();
});