document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        // Smooth scroll
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });

        // Přidání podtržení při najetí
        link.addEventListener('mouseenter', () => {
            link.classList.add('underline');
        });

        // Odebrání podtržení při odjetí
        link.addEventListener('mouseleave', () => {
            link.classList.remove('underline');
        });
    });
});
