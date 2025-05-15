// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrgcetM-KhOBOwpbb6JsWRX7O03dZL07I",
    authDomain: "coder-react-app-45f84.firebaseapp.com",
    projectId: "coder-react-app-45f84",
    storageBucket: "coder-react-app-45f84.firebasestorage.app",
    messagingSenderId: "346434782592",
    appId: "1:346434782592:web:2056b8fb3db38a15462d65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);