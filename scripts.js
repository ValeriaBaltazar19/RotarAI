// Animaciones adicionales con JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const features = document.querySelectorAll('.feature-item');
    const templates = document.querySelectorAll('.template-item');
    const testimonials = document.querySelectorAll('.testimonial-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    features.forEach(feature => observer.observe(feature));
    templates.forEach(template => observer.observe(template));
    observer.observe(testimonials[0]); // Asumiendo que solo hay un testimonial
});