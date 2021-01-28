function sendEmail(contactForm){
    emailjs.send("gmail", "match-the-pairs",{
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.email.value,
        "game_feedback": contactForm.message.value
    })
    .then(
        function(response) {
            document.getElementById("submit-msg").innerHTML = "Thank you! Your message has been successfully sent!";
        },
        function(error) {
             document.getElementById("submit-msg").innerHTML = "Uh-oh! Something has gone wrong; message has not been sent!";
        }
    )

    document.getElementById("contactForm").reset();
    return false;
};