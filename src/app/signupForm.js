
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { auth } from './firebase.js'


const signUpForm = document.querySelector('#form_register');

signUpForm.addEventListener('submit',  async(e)=>{
    e.preventDefault()

    const email = signUpForm['signup-mail-register'].value
    const pass = signUpForm['signup-password-register'].value

    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(userCredentials)
    }catch(error){
        console.log(error.message);
        console.log(error.code);

        alert('Algo fue mal');
    }
} )