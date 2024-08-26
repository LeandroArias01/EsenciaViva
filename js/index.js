const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', function() {
    navLinks.classList.remove('show');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
});

