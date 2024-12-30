// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmI6rrJh08KJ8-i6fLPqpSOQI68sKQ9FA",
    authDomain: "react-auth-165c7.firebaseapp.com",
    projectId: "react-auth-165c7",
    storageBucket: "react-auth-165c7.firebasestorage.app",
    messagingSenderId: "848257072671",
    appId: "1:848257072671:web:c9c6eefa4db62011769f2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出firebase
export const auth=getAuth(app);
export const provide=new GoogleAuthProvider();