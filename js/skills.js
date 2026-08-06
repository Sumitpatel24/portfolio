// ===============================
// Skills Data
// ===============================

const skills = {

    python: {
        title: "Python",
        role: "Backend Development",
        percent: "60%",
        width: "60%",
        description: "Building scalable backend applications using Python, Flask and MySQL."
    },

    html: {
        title: "HTML5",
        role: "Frontend Development",
        percent: "95%",
        width: "95%",
        description: "Creating modern, semantic and responsive web page structures."
    },

    css: {
        title: "CSS3",
        role: "UI / UX Design",
        percent: "90%",
        width: "90%",
        description: "Designing beautiful responsive layouts using Flexbox, Grid and animations."
    },

    javascript: {
        title: "JavaScript",
        role: "Frontend Development",
        percent: "55%",
        width: "55%",
        description: "Building interactive user interfaces with modern JavaScript."
    },

    mysql: {
        title: "MySQL",
        role: "Database",
        percent: "58%",
        width: "58%",
        description: "Designing relational databases and writing optimized SQL queries."
    },

    flask: {
        title: "Flask",
        role: "Backend Framework",
        percent: "50%",
        width: "50%",
        description: "Developing secure web applications and REST APIs using Flask."
    }

};

// ===============================
// Elements
// ===============================

const icons = document.querySelectorAll(".skill-icon");

const title = document.getElementById("skill-title");
const role = document.getElementById("skill-role");
const percent = document.getElementById("skill-percent");
const description = document.getElementById("skill-description");
const progress = document.querySelector(".progress-fill");

// ===============================
// Update Card
// ===============================

function updateSkill(icon){

    const key = icon.dataset.skill;

    const skill = skills[key];

    if(!skill) return;

    title.textContent = skill.title;
    role.textContent = skill.role;
    percent.textContent = skill.percent;
    description.textContent = skill.description;

    progress.style.width = skill.width;

    icons.forEach(item => item.classList.remove("active"));

    icon.classList.add("active");

}

// ===============================
// Events
// ===============================

icons.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        updateSkill(icon);

    });

    icon.addEventListener("click",()=>{

        updateSkill(icon);

    });

});

// ===============================
// Default Active
// ===============================

updateSkill(document.querySelector(".skill-icon"));

const orbit = document.querySelector(".orbit");
const ring1 = document.querySelector(".orbit-ring1");
const ring2 = document.querySelector(".orbit-ring2");

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        orbit.style.animationPlayState = "paused";
        ring1.style.animationPlayState = "paused";
        ring2.style.animationPlayState = "paused";

        updateSkill(icon);

    });

    icon.addEventListener("mouseleave", () => {

        orbit.style.animationPlayState = "running";
        ring1.style.animationPlayState = "running";
        ring2.style.animationPlayState = "running";

    });

});

// =========================
// Generate Stars
// =========================

const stars = document.querySelector(".stars");

for(let i=0; i<120; i++){

    const star = document.createElement("span");

    star.style.left = Math.random()*100 + "%";

    star.style.top = Math.random()*100 + "%";

    const size = Math.random()*3 + 1;

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.animationDelay = Math.random()*4 + "s";

    star.style.animationDuration = (2 + Math.random()*4) + "s";

    stars.appendChild(star);

}

// =========================
// Floating Particles
// =========================

const particles = document.querySelector(".particles");

for(let i=0;i<25;i++){

    const p = document.createElement("span");

    const size = Math.random()*8+3;

    p.style.width = size+"px";
    p.style.height = size+"px";

    p.style.left = Math.random()*100+"%";
    p.style.top = Math.random()*100+"%";

    p.style.animationDelay = Math.random()*6+"s";
    p.style.animationDuration = (8+Math.random()*8)+"s";

    particles.appendChild(p);

}

// ============================
// Mouse Parallax
// ============================

const galaxy = document.querySelector(".galaxy-bg");

const planet1 = document.querySelector(".planet1");
const planet2 = document.querySelector(".planet2");

const nebula1 = document.querySelector(".nebula1");
const nebula2 = document.querySelector(".nebula2");

const starsLayer = document.querySelector(".stars");
const particlesLayer = document.querySelector(".particles");

document.addEventListener("mousemove",(e)=>{

    const x = (e.clientX/window.innerWidth - .5)*20;

    const y = (e.clientY/window.innerHeight - .5)*20;

    galaxy.style.transform =
    `translate(${x}px,${y}px)`;

    starsLayer.style.transform =
    `translate(${x*.3}px,${y*.3}px)`;

    particlesLayer.style.transform =
    `translate(${x*.5}px,${y*.5}px)`;

    planet1.style.transform =
    `translate(${x*.8}px,${y*.8}px)`;

    planet2.style.transform =
    `translate(${-x*.8}px,${-y*.8}px)`;

    nebula1.style.transform =
    `translate(${x*.6}px,${y*.6}px)`;

    nebula2.style.transform =
    `translate(${-x*.6}px,${-y*.6}px)`;

});