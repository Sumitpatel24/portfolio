/*=========================================
        EDUCATION SCROLL REVEAL
=========================================*/

const educationCards = document.querySelectorAll(".timeline-item");

const educationObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

educationCards.forEach((card) => {

    educationObserver.observe(card);

});