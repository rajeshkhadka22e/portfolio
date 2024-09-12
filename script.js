document.getElementById('mobile-menu-button').onclick = function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Hide mobile menu after clicking on "Home"
document.getElementById('mobile-menu').onclick = function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.add('hidden');
}
function sendMaill(){
    var parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value

    }
    emailjs.send("Dhanmaya", "Rajeshkhadka",parms).then(function (res) {
alert("email sent !" + res.status);

})

 }


