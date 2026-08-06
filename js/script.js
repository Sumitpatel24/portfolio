// ===========================
// Cursor Glow
// ===========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// ===========================
// Hover Effect
// ===========================

const hoverItems = document.querySelectorAll(

".btn, .skill-icon, .skill-card"

);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        glow.style.width="380px";

        glow.style.height="380px";

    });

    item.addEventListener("mouseleave",()=>{

        glow.style.width="250px";

        glow.style.height="250px";

    });

});

// ===============================
// Cursor Color Change
// ===============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 250;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    switch(current){

        case "home":

            glow.style.background =
            "radial-gradient(circle, rgba(59,130,246,.35), rgba(59,130,246,.12), transparent 75%)";

            break;

        case "about":

            glow.style.background =
            "radial-gradient(circle, rgba(168,85,247,.35), rgba(168,85,247,.12), transparent 75%)";

            break;

        case "skills":

            glow.style.background =
            "radial-gradient(circle, rgba(6,182,212,.35), rgba(6,182,212,.12), transparent 75%)";

            break;

        case "projects":

            glow.style.background =
            "radial-gradient(circle, rgba(34,197,94,.35), rgba(34,197,94,.12), transparent 75%)";

            break;

        case "contact":

            glow.style.background =
            "radial-gradient(circle, rgba(249,115,22,.35), rgba(249,115,22,.12), transparent 75%)";

            break;

    }

});

// ==========================================
// Scroll Reveal
// ==========================================

const revealElements = document.querySelectorAll(

    ".home-content,\
     .home-image,\
     .about-image,\
     .about-content,\
     .skills-left,\
     .skills-right,\
     .project-card,\
     .contact-info,\
     .contact-form,\
     .footer-content"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});