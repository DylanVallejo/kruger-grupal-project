// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY_FIREBASE,
    authDomain: "fir-auth-kruger-front.firebaseapp.com",
    projectId: "fir-auth-kruger-front",
    storageBucket: "fir-auth-kruger-front.appspot.com",
    messagingSenderId: "348816570860",
    appId: "1:348816570860:web:d0ba55a71324a0695b28c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app