// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAA27ZhmLjumpRGqKlas8HkGfWcXeCOsU0",
  authDomain: "netflix-gpt-6bc2a.firebaseapp.com",
  projectId: "netflix-gpt-6bc2a",
  storageBucket: "netflix-gpt-6bc2a.appspot.com",
  messagingSenderId: "976986655562",
  appId: "1:976986655562:web:112a0454452ff71e4b8fb3",
  measurementId: "G-Z5XKZD50FV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 export const auth = getAuth();