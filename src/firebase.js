// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBipifdhXd3_M61pUdamgHzWWaNfyNVkPM",
  authDomain: "netflixcl-222dc.firebaseapp.com",
  projectId: "netflixcl-222dc",
  storageBucket: "netflixcl-222dc.appspot.com",
  messagingSenderId: "979661899166",
  appId: "1:979661899166:web:0c35c7e679367a059ec28f",
  measurementId: "G-LX9JWH14Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
//npm install -g firebase-tools