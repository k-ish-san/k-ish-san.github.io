// Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic highlighting of navigation links based on scroll position
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission handling (assuming you have a form with id="contact-form")
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    // Here you can use Fetch API or XMLHttpRequest to send the form data to your backend
    // Example using Fetch API
    fetch('https://example.com/contact', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Handle success (e.g., show a success message)
            console.log('Form submitted successfully');
        } else {
            // Handle error (e.g., show an error message)
            console.error('Form submission failed');
        }
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
});

