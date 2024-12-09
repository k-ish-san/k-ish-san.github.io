// Get the loader container and content using class names
const loaderContainer = document.querySelector('.loader-container');
const mainContent = document.querySelector('.content');

// Hide the loader and show the content when the page is fully loaded
window.onload = function() {
    
    setTimeout(() => {
        loaderContainer.style.display = 'none'; // Hide the loader
        mainContent.style.display = 'block'; // Show the main content
    }, 3000); // Delay for 5 seconds for testing
};
