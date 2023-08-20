import {auth,signOut,storage, createUserWithEmailAndPassword,signInWithEmailAndPassword,googleAuthProvider,signInWithRedirect} from "./app.js";

const logoutBtn = document.getElementById("logout-btn");


// Add click event listener to the "logout" button
logoutBtn.addEventListener("click", () => {
    console.log("logout");
    localStorage.removeItem("data");
  // Call the Firebase signOut() method to log the user out
  signOut(auth)
    .then(() => {
      // Logout successful
      alert("Tussi jaa rahe ho bye");
      // Redirect the user to the login page (or any other desired page)
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Handle any errors that occur during the logout process
      alert("An error occurred during logout. Please try again.");
      console.error("Logout Error:", error);
    });
});