import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { auth } from "../config/configFirebase.js"

const registerForm = document.querySelector('#form_register')

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const user = registerForm['user-name'].value
    const email = registerForm['mail-register'].vaue
    const pass = registerForm['password-register'].value

    console.log(user, email, pass)

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, pass)
        console.log(userCredential)
    } catch (error) {
        console.log(error)
    }
})


