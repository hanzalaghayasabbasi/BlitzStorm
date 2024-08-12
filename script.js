// Dot loading logic
window.addEventListener('load', function() {
    // Get the overlay element
    var overlay = document.getElementById('loading-overlay');
    
    // Add a class to fade out the overlay
    overlay.classList.add('fade-out');
    
    // Remove the overlay from the DOM after the fade-out animation
    setTimeout(function() {
        overlay.style.display = 'none';
    }, 1000); // Match this time with the CSS transition duration
});

// smoother navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// slid up In hero class 

document.addEventListener('DOMContentLoaded', () => {
    const slideElements = document.querySelectorAll('.slide-up');

    const checkVisibility = () => {
        slideElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight * 0.8) {
                setTimeout(() => {
                    element.classList.add('visible');
                }, 300); // Delay of 300 milliseconds
            }
        });
    };

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
});

/* function toggleNav() {
    var nav = document.querySelector('nav.main-nav');
    nav.classList.toggle('open');
} */

    function toggleNav() {
        const menu = document.querySelector('nav.main-nav');
        const button = document.querySelector('.menu-toggle');
    
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            button.innerHTML = '☰'; // Change icon back to "hamburger"
        } else {
            menu.classList.add('open');
            button.innerHTML = '✖'; // Change icon to "close"
        }
    }
    