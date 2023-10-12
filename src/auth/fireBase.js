// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { addDoc, collection, getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxmoEtAXtTW5fg3QTl51f5ttXwxTXzg8",
  authDomain: "countries-bootstrap-23k.firebaseapp.com",
  projectId: "countries-bootstrap-23k",
  storageBucket: "countries-bootstrap-23k.appspot.com",
  messagingSenderId: "278993426092",
  appId: "1:278993426092:web:c828834bc07118c5b33109"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db= getFirestore(app)

const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    }
    catch (err) {
        console.log(err)
        alert(err.message)

    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    }

    catch (err) {
        console.log(err)
        alert(err.message)

    }
}

const logout = () => {
    signOut(auth)
}

export {
    auth, db, loginWithEmailAndPassword, registerWithEmailAndPassword, logout
}