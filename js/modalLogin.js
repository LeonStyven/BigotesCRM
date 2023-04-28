let backBoxLogin = document.getElementById("back__box__login");
let backBoxRegister = document.getElementById("back__box__register");
let formLogin = document.getElementById("form__login");
let formRegister = document.getElementById("form_register");
let backBox = document.getElementById("back__box");
document.getElementById("back-box-btn-login").addEventListener("click", changeLogin);
document.getElementById("back-box-btn-register").addEventListener("click", changeRegister);

function changeLogin(event){
    backBoxLogin.classList.toggle("back-box-login-active");
    backBoxRegister.classList.toggle("back-box-register-active");
    backBoxLogin.classList.add("animate__fadeInLeft");
    formLogin.style.display = "flex";
    formRegister.style.display = "none";
    formLogin.classList.add("animate__fadeInLeft");
    backBox.classList.toggle("back-box-reverse");   
}

function changeRegister(event){
    backBoxLogin.classList.toggle("back-box-login-active");
    backBoxRegister.classList.toggle("back-box-register-active");
    backBoxRegister.classList.add("animate__fadeInRight");
    formRegister.style.display = "flex";
    formLogin.style.display = "none";
    formRegister.classList.add("animate__fadeInRight");
    backBox.classList.toggle("back-box-reverse");  
}
