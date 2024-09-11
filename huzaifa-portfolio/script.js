document.getElementById('ham').addEventListener('click', function() {
    var navMenu = document.querySelector('.nav_menu');
    navMenu.classList.toggle('active');
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav .nav_menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
