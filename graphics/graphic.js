// Header show-hide
let headerShow = document.getElementById("header-show");
let headerHide = document.getElementById("header-hide");
let buttonShow = document.getElementById("slide-button");
let buttonHide = document.getElementById("slide-button-hide");
buttonShow.addEventListener("click", downUp);
buttonHide.addEventListener("click", downUp);

function downUp(){
    headerShow.classList.toggle("hide");
    headerHide.classList.toggle("hide");
    headerShow.classList.add("animate__slideInDown");
}


