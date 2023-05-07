// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC65y0ZUOOFWTd85ms9C7CrLX_8FwVDjRY",
  authDomain: "user-eac38.firebaseapp.com",
  projectId: "user-eac38",
  storageBucket: "user-eac38.appspot.com",
  messagingSenderId: "1086571825387",
  appId: "1:1086571825387:web:4af05925dd02893ece56ae",
  measurementId: "G-81FB6FB810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);