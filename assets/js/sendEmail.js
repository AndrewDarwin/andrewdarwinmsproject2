// I used https://www.emailjs.com/docs/tutorial/creating-contact-form/ to help form the below code

function sendMail(contactForm) {
    emailjs.send("gmail", "ibizalife", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "information_request": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            document.getElementById('feedback-email').innerHTML = 'Thank you for your message, you will receive a reply soon.';
            contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}

