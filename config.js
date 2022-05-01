import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB7ssubJ2IIJfb1n_uAGDJAhODQBV3SjTs",
    authDomain: "e-ride-stage-4-f0926.firebaseapp.com",
    projectId: "e-ride-stage-4-f0926",
    storageBucket: "e-ride-stage-4-f0926.appspot.com",
    messagingSenderId: "737393142460",
    appId: "1:737393142460:web:2ba00fccdbd8d366593eb9"
  };
  
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
