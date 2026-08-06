// ==========================================
// NAVBAR.JS
// ==========================================

// Mobile Menu Elements
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");
        menuBtn.classList.toggle("active");

    });

}

// ==========================================
// CLOSE MENU AFTER CLICKING A LINK
// ==========================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) navbar.classList.remove("active");

        if (menuBtn) menuBtn.classList.remove("active");

    });

});

// ==========================================
// ACTIVE NAVBAR LINK
// ==========================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================================
// CLOSE MENU ON SCROLL (MOBILE)
// ==========================================

window.addEventListener("scroll", () => {

    if (window.innerWidth <= 768) {

        if (navbar) navbar.classList.remove("active");

        if (menuBtn) menuBtn.classList.remove("active");

    }

});

// ==========================================
// CLOSE MENU WHEN WINDOW IS RESIZED
// ==========================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        if (navbar) navbar.classList.remove("active");

        if (menuBtn) menuBtn.classList.remove("active");

    }

});