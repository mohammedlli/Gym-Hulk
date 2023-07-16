// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC8K5j4AcPGv50OI5ftHUPXWzQ6V0axofY",
    authDomain: "hulk-gym-8389a.firebaseapp.com",
    projectId: "hulk-gym-8389a",
    storageBucket: "hulk-gym-8389a.appspot.com",
    messagingSenderId: "149057911953",
    appId: "1:149057911953:web:cda2f4eda3399ad9715330",
    measurementId: "G-DYCY7S6HJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
