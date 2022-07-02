import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const fb = firebase.initializeApp({
  apiKey: "AIzaSyA6DmgI6DmWbz7K6kGWIIs3MjSj3ltCOFQ",
  authDomain: "sito-9b7c6.firebaseapp.com",
  databaseURL:
    "https://sito-9b7c6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sito-9b7c6",
  storageBucket: "sito-9b7c6.appspot.com",
  messagingSenderId: "694197123607",
  appId: "1:694197123607:web:73c0402b5327782e9e3a52",
  measurementId: "G-W2ERZBXLZ9",
});
