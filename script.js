function toggleMenu() {
    var nav = document.getElementById('for_logo');
    nav.style.display === 'none' ? nav.style.display = 'block' : nav.style.display = 'none';
}


function sendEmail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_iyx7ux4", "template_zxtpumk", parms).then(alert("We will contact you soon!"))
}
