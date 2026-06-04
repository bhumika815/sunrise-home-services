const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const msg = form.querySelector('textarea').value;

    if(!name || !email || !phone || !msg){
        message.style.color = "red";
        message.textContent = "Please fill all fields.";
        return;
    }

    const whatsappMessage =
        `New Service Request:%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A` +
        `Phone: ${phone}%0A` +
        `Message: ${msg}`;

    window.open(`https://wa.me/919876543210?text=${whatsappMessage}`, "_blank");

    message.style.color = "green";
    message.textContent = "Redirecting to WhatsApp...";

    form.reset();
});