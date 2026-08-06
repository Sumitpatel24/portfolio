// ==========================================
// CONTACT.JS
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // EMAILJS INIT
    // ==========================================

    emailjs.init({
        publicKey: "anvOuVHdWarP2ay-D"
    });

    // ==========================================
    // ELEMENTS
    // ==========================================

    const form = document.getElementById("contact-form");
    const btn = document.getElementById("sendBtn");
    const toast = document.getElementById("success-toast");

    if (!form) return;

    // ==========================================
    // SUBMIT
    // ==========================================

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // ==========================================
        // VALIDATION
        // ==========================================

        if (!name || !email || !subject || !message) {

            alert("Please fill all fields.");

            return;

        }

        // ==========================================
        // EMAIL VALIDATION
        // ==========================================

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;

        }

        // ==========================================
        // BUTTON LOADING
        // ==========================================

        btn.disabled = true;

        btn.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span>Sending...</span>
        `;

        // ==========================================
        // SEND EMAIL
        // ==========================================

        emailjs.send(

            "service_ch6m4if",

            "template_jdhzxwz",

            {

                name: name,

                email: email,

                subject: subject,

                message: message

            }

        )

        .then(() => {

            form.reset();

            toast.classList.add("show");

            setTimeout(() => {

                toast.classList.remove("show");

            }, 4000);

        })

        .catch((error) => {

            console.error(error);

            alert("Something went wrong.\nPlease try again.");

        })

        .finally(() => {

            btn.disabled = false;

            btn.innerHTML = `
                <i class="fa-solid fa-paper-plane"></i>
                <span>Send Message</span>
            `;

        });

    });

});