// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDZArSwVqr_T_kRMSspFMpVd-vp3GAjSqg",
authDomain: "usersbigotescrm.firebaseapp.com",
projectId: "usersbigotescrm",
storageBucket: "usersbigotescrm.appspot.com",
messagingSenderId: "357439113413",
appId: "1:357439113413:web:ac7cebe7491c9fd300c8ac",
measurementId: "G-0KBL4WFMJD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);