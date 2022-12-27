// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuZO8UTQ_tSLA01Jp8eVyLghnIZM8wITw",
  authDomain: "ub-notes-1a637.firebaseapp.com",
  projectId: "ub-notes-1a637",
  storageBucket: "ub-notes-1a637.appspot.com",
  messagingSenderId: "799819815651",
  appId: "1:799819815651:web:87982ebc926380c9db83d6",
  measurementId: "G-DR5VY75GEV"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);