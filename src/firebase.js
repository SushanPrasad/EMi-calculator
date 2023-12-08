import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

// Initialize Firebase const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider };