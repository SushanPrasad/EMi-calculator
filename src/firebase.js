// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRz2atTZ3aj58YAxQgt1kMGtqQN4Cf5-Y",
  authDomain: "emicalculatorsushan.firebaseapp.com",
  projectId: "emicalculatorsushan",
  storageBucket: "emicalculatorsushan.appspot.com",
  messagingSenderId: "57328750763",
  appId: "1:57328750763:web:98383003da0b878c5467ee",
  measurementId: "G-26EB6091QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);