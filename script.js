let register = document.getElementById('register');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let email = document.getElementById('email');
let mdp = document.getElementById('mdp');
let confirmMdp = document.getElementById('confirmMdp');

function isEmailValid (email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};


function isPasswordSecure(password) {
    let re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


register.addEventListener('submit', function (e) {

    if (nom.value == "") {
        let error1 = document.getElementById('error1');
        error1.innerHTML = "Le champs est requis.";
        error1.style.color = 'red';
        e.preventDefault();
    } else if (nom.value.length < 3) {
        let error1 = document.getElementById('error1');
        error1.innerHTML = "Le nom doit avoir plus de 3 caractères";
        error1.style.color = 'red';
        e.preventDefault();
    }
    if (prenom.value == "") {
        let error2 = document.getElementById('error2');
        error2.innerHTML = "Le champs est requis.";
        error2.style.color = 'red';
        e.preventDefault();
    } else if (prenom.value.length < 3) {
        let error2 = document.getElementById('error2');
        error2.innerHTML = "Le prénom doit avoir plus de 3 caractères";
        error2.style.color = 'red';
        e.preventDefault();
    }
    if (email.value == "") {
        let error3 = document.getElementById('error3');
        error3.innerHTML = "Le champs est requis.";
        error3.style.color = 'red';
        e.preventDefault();
    } else if (isEmailValid(email.value) == false ){
        let error3 = document.getElementById('error3');
        error3.innerHTML = "L'adresse e-mail est invalide";
        error3.style.color = 'red';
        e.preventDefault();
    }
    if (mdp.value == "") {
        let error4 = document.getElementById('error4');
        error4.innerHTML = "Le champs est requis.";
        error4.style.color = 'red';
        e.preventDefault();
    }else if (isPasswordSecure(mdp.value) == false) {
        let error4 = document.getElementById('error4');
        error4.innerHTML = "Le mot de passe doit contenir au moins 8 caractères dont : une majuscule, une minuscule, un chiffre et un caractère spéciale.";
        error4.style.color = 'red';
        e.preventDefault();
    }
    if (confirmMdp.value == "") {
        let error5 = document.getElementById('error5');
        error5.innerHTML = "Le champs est requis.";
        error5.style.color = 'red';
        e.preventDefault();
    } else if (mdp.value != confirmMdp.value) {
        let error5 = document.getElementById('error5');
        error5.innerHTML = "Les mots de passes doivent être identiques.";
        error5.style.color = 'red';
        e.preventDefault();
    }
});