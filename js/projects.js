// =======================================
// PROJECT REVEAL
// =======================================

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-project");

        }

    });

},{
    threshold:.2
});

cards.forEach(card=>observer.observe(card));


// =======================================
// 3D TILT
// =======================================

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x-rect.width/2)/18;

        const rotateX = -(y-rect.height/2)/18;

        card.style.transform =
        `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-12px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});