// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkiQ0deYEEraVKftsv2IwiEHJ3DwLJSlY",
  authDomain: "haircut-project.firebaseapp.com",
  projectId: "haircut-project",
  storageBucket: "haircut-project.firebasestorage.app",
  messagingSenderId: "899784561508",
  appId: "1:899784561508:web:5d583098717293fca1e071"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, doc, setDoc, getDoc };

