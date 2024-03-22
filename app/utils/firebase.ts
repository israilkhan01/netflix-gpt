// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNvZESSuvEMvqCruVsxaz0CUDwHwlUMyQ",
  authDomain: "netflixgpt-92c88.firebaseapp.com",
  projectId: "netflixgpt-92c88",
  storageBucket: "netflixgpt-92c88.appspot.com",
  messagingSenderId: "306930210499",
  appId: "1:306930210499:web:7ff35fdb10288da3e6b476",
  measurementId: "G-ZVM8LGE5CJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
export const auth = getAuth();