// Import the functions you need from the SDKs you need
// import firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut,sendPasswordResetEmail,signInWithPopup,signInWithRedirect,GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getStorage ,deleteObject , ref, uploadBytes, getDownloadURL,getMetadata,listAll  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import {getDatabase, ref as dbRef, push ,get,onValue,remove,child} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFM29CvNYQ9jEU1c3GUiIMG6TyR9V3_2k",
  authDomain: "recipe-a17ac.firebaseapp.com",
  databaseURL: "https://recipe-a17ac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "recipe-a17ac",
  storageBucket: "recipe-a17ac.appspot.com",
  messagingSenderId: "831806161869",
  appId: "1:831806161869:web:e24e8e9e759b0def54ba84",
  measurementId: "G-R4WMJ3NGBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage=getStorage(app);
const database=getDatabase(app);
// Initialize Google provider
const googleAuthProvider = new GoogleAuthProvider();



export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,storage,database,dbRef,push,get,onValue,remove,child,ref,deleteObject,uploadBytes,getDownloadURL,getMetadata,listAll,googleAuthProvider,signInWithPopup,signInWithRedirect,sendPasswordResetEmail };