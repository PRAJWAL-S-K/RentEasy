// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mers-estate.firebaseapp.com",
    projectId: "mers-estate",
    storageBucket: "mers-estate.appspot.com",
    messagingSenderId: "532735305627",
    appId: "1:532735305627:web:8a2c7007b16b6fb224233e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);