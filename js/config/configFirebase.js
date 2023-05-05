import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDZArSwVqr_T_kRMSspFMpVd-vp3GAjSqg",
    authDomain: "usersbigotescrm.firebaseapp.com",
    projectId: "usersbigotescrm",
    storageBucket: "usersbigotescrm.appspot.com",
    messagingSenderId: "357439113413",
    appId: "1:357439113413:web:ebd7562e33b5effe00c8ac",
    measurementId: "G-MVQQ1ZKC9E"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);