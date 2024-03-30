// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Menu button toggle
function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
}

// Event listeners
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);
document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);

