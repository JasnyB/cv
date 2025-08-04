

// script.js
// script.js

document.addEventListener("DOMContentLoaded", function () {
    VANTA.NET({
        el: "body",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0077cc,
        backgroundColor: 0x111111,
        points: 10.0,
        maxDistance: 20.0,
        spacing: 18.0
    });

    // Toggle sections
    document.querySelectorAll('section').forEach(h2 => {
        h2.style.cursor = 'pointer';
        h2.addEventListener("click", () => {
            const content = h2.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});

    document.querySelectorAll('section').forEach(section => {
        const h2 = section.querySelector('h2');
        const contentElements = Array.from(h2.parentElement.children).filter(el => el !== h2);

        h2.style.cursor = 'pointer';
        h2.addEventListener("click", () => {
            const isHidden = contentElements[0].style.display === "none";
            contentElements.forEach(el => {
                el.style.display = isHidden ? "block" : "none";
            });
        });
    });