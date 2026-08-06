// ==========================================
// STATS COUNTER
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");
    const statsSection = document.querySelector(".stats");

    let started = false;

    function startCounter() {

        if (started) return;

        started = true;

        counters.forEach(counter => {

            const target = +counter.getAttribute("data-target");

            const duration = 2000; // 2 seconds

            const stepTime = 20;

            const increment = target / (duration / stepTime);

            let current = 0;

            const updateCounter = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    }

    // ==========================================
    // INTERSECTION OBSERVER
    // ==========================================

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter();

                }

            });

        },

        {

            threshold: 0.4

        }

    );

    observer.observe(statsSection);

});