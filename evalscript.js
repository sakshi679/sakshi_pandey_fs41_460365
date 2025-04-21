document.getElementById("contactForm").addEventListener("submit" , function(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const formData = {
        name,
        email,
        phone,
        message
    };

    localStorage.setItem("contactData", JSON.stringify(formData));

    document.getElementById("formMessage").textContent = "Thank you! We'll get in touch soon.";
    e.target.reset();
});