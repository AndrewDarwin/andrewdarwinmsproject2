// I used https://www.emailjs.com/docs/tutorial/creating-contact-form/ to help form the below code

function sendMail(contactForm) {
    emailjs.send("gmail", "ibizalife", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "information_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}
