
import {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,googleAuthProvider,signInWithRedirect} from "./app.js";



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));

let typed = new Typed(".type", {
    strings: ["Friends"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 130,
    backDelay: 1000,
    backSpeed: 60,
    loop: true,
  });




  function register(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        alert("HO gaya bhai tu register");
        window.location.href = "index.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage); // Show the error message in an alert
        console.log(errorCode); // Log the error code to the console
        console.log(errorMessage); // Log the error message to the console
      });
  }
  
  document.getElementById("signup-button").addEventListener("click", register);


  document.getElementById("signIn-button").addEventListener("click", login);
function login(e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        alert("Aayiye Aapka Intezaar Tha")
        
        window.location.href = "home.html";
    
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       alert(errorMessage,errorCode) // Show the error message in an alert
       
      });
  }




// Google Sign-In button element
const googleSignInButton = document.getElementById('In-social-button');

// Attach a click event listener to the Google Sign-In button
googleSignInButton.addEventListener('click', () => {
  // Sign in with Google using Firebase
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // User signed in with Google successfully
      const user = result.user;
      console.log("User signed in with Google:", user);
      window.location.replace("home.html"); // Use function call here

    })
    .catch((error) => {
      console.error("Google Sign-In error:", error);
    });
});

const googleSignUpButton = document.getElementById('Up-social-button');

googleSignUpButton.addEventListener('click', () => {
  // Sign in with Google using Firebase
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // User signed in with Google successfully
      const user = result.user;
      console.log("User signed in with Google:", user);
      // GO TO HOMEPAGE
      window.location.href = "home.html";

    })
    .catch((error) => {
      console.error("Google Sign-In error:", error);
    });
});



