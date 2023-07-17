// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Tpxi715pSrHEfOSrwkXkrWoAjFifno4",
  authDomain: "usedcarpriceprediction-f83c1.firebaseapp.com",
  projectId: "usedcarpriceprediction-f83c1",
  storageBucket: "usedcarpriceprediction-f83c1.appspot.com",
  messagingSenderId: "674179942168",
  appId: "1:674179942168:web:0f2351930ca978f54d406d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export   const db=getFirestore(app);