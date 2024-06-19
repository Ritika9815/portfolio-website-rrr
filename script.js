// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Here you can add code to handle form submission, e.g., send data to a backend server or display a confirmation message.
    // For demonstration purposes, we'll just log the form data.
    const formData = new FormData(this);
    console.log('Form submitted with data:', Object.fromEntries(formData));
});
