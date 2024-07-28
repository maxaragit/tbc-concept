document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    const offersContent = document.querySelector('.offers-content');
    let isDragging = false;
    let startX;
    let scrollLeft;
    offersContent.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - offersContent.offsetLeft;
        scrollLeft = offersContent.scrollLeft;
        offersContent.style.cursor = 'grabbing';
    });

    offersContent.addEventListener('mouseleave', () => {
        isDragging = false;
        offersContent.style.cursor = 'grab';
    });

    offersContent.addEventListener('mouseup', () => {
        isDragging = false;
        offersContent.style.cursor = 'grab';
    });
    offersContent.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - offersContent.offsetLeft;
        const walk = (x - startX) * 2;
        offersContent.scrollLeft = scrollLeft - walk;
    });
});
