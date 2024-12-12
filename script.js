 // JavaScript to trigger file download
 document.getElementById('download-btn').addEventListener('click', function() {
    const link = document.createElement('a'); // Create anchor tag
    link.href = 'files/Resume.pdf';                // File URL (replace with your file path)
    link.download = 'Resume.pdf';            // File name when downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);          // Clean up
});


// Using Intersection Observer to detect visibility
const sections = document.querySelectorAll('section');

// Intersection Observer configuration
const observerOptions = {
    root: null, // Observes in the viewport
    threshold: 0.3 // Trigger when 30% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Add active class when visible
        } else {
            entry.target.classList.remove('active'); // Remove active class when out of view
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
