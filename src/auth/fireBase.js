// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { addDoc, collection, deleteDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import toast from "react-hot-toast";

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
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Successfully logged in')
    }
    catch (err) {
        toast.error(err.message);
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        toast.success('Registration successful')
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    }
    catch (err) {
        toast.error(err.message)
    }
}

const logout = () => {
    signOut(auth);
    toast.success('Logged out successfully')
};

const addFavouriteToFirebase = async (uid, name) => {
    try {
      await addDoc(collection(db, `users/${uid}/favourites`), {
        name,
      });
    } catch (error) {
      console.log('Error adding favourite to Firebase database', error);
    }
};
  
const removeFavouriteFromFirebase = async (uid, name) => {
    try {
      if (!name) {
        return;
      }
      const q = query(
        collection(db, `users/${uid}/favourites`),
        where('name', '==', name)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    } catch (error) {
      console.log('Error removing favourite from Firebase database', error);
    }
};
  
const clearFavouritesFromFirebase = async (uid) => {
    try {
      const q = query(collection(db, `users/${uid}/favourites`));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
    } catch (error) {
      console.log('Error removing favourites from Firebase database', error);
    }
};

export {
    auth, 
    db, 
    loginWithEmailAndPassword, 
    registerWithEmailAndPassword, 
    logout,
    clearFavouritesFromFirebase,
    removeFavouriteFromFirebase,
    addFavouriteToFirebase
}