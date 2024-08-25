document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const headerElements = document.querySelector(".header-elements");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            } else {
                entry.target.style.opacity = "0";
                entry.target.style.transform = "translateY(50px)";
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
        observer.observe(section);
    });

    if (headerElements) {
        headerElements.style.transition = "opacity 0.8s ease-in-out, transform 0.8s ease-in-out";
        observer.observe(headerElements);
    }

});
