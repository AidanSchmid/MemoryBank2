import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDprIDe3csWIfPb8a0rXeVMTN085e-pEnU",
  authDomain: "memorybank-1dc29.firebaseapp.com",
  projectId: "memorybank-1dc29",
  storageBucket: "memorybank-1dc29.appspot.com",
  messagingSenderId: "291932000297",
  appId: "1:291932000297:web:925ba87ef21057c2400c38",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
