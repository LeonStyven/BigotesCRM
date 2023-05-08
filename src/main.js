import './app/signupForm.js'
import './app/signinForm.js'
import './app/logout.js'
import { loginCheck } from './app/loginCheck.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js"
import { auth } from './app/firebase.js'
 

const ModalStatus = false;
document.getElementById("account-button").addEventListener('click', toggleAcountAccess);
document.getElementById("close-modal-button").addEventListener('click', toggleModal);
document.querySelectorAll(".product-card").forEach(element => {
    element.addEventListener('click', e =>{
        const id = e.target.getAttribute("id");
        toggleModal();
        
    });
})

function toggleModal(){
    document.getElementById("modal-background").classList.toggle('modal-display')
}
function toggleAcountAccess(){
    document.getElementById("acount-options").classList.toggle('acount-options-display')
}

onAuthStateChanged(auth, async (user) => {

    loginCheck(user)

    // if(user){
    //     loginCheck(user)
    // }else{
    //     loginCheck(user)
    // }

}) 