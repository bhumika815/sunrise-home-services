const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
        if(input.value.trim() === ""){
            valid = false;
        }
    });

    if(!valid){
        message.style.color = "red";
        message.textContent = "Please fill all fields correctly.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Message sent successfully! We will contact you soon.";

    form.reset();
});