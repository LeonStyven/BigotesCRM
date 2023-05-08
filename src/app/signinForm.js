
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js"
import { auth } from './firebase.js'


const signInForm = document.querySelector('#form__login');

signInForm.addEventListener('submit', async e=>{
    e.preventDefault()

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try{
        const credentials = await signInWithEmailAndPassword(auth, email, password)
         console.log(credentials)
    }catch(error){
        console.log(error.message);
        console.log(error.code);

        alert('Algo fue mal al iniciar sesion');
    }
    
})