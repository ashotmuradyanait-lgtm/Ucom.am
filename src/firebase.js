// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9P1asx7DbgLQppkaUUlGbpI5gvvpk-cQ",
  authDomain: "ucom-am.firebaseapp.com",
  projectId: "ucom-am",
  storageBucket: "ucom-am.firebasestorage.app",
  messagingSenderId: "755309540990",
  appId: "1:755309540990:web:6abcf6ca8fddeef50d8a2f",
  measurementId: "G-VGS8STSYGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);