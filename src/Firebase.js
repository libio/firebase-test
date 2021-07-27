import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCbYMUKANq9Ru5QitqADSPZErTes_7S-GI",
    authDomain: "fir-react-48be2.firebaseapp.com",
    projectId: "fir-react-48be2",
    storageBucket: "fir-react-48be2.appspot.com",
    messagingSenderId: "604324155539",
    appId: "1:604324155539:web:a15112eab29adb643f3d66"
 };
 // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();
const auth = firebase.auth();
export  {db, auth}

