function sendEmail(contactForm){
    emailjs.send("gmail", "match-the-pairs",{
        "from_name": contactForm.fullname.value,
        "from_email": contactForm.email.value,
        "game_feedback": contactForm.message.value
    });
    document.getElementById("contactForm").reset();
    return false;
};