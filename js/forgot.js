// import {auth,sendPasswordResetEmail} from "./app.js";

// Forgot Password logic
document.getElementById("forgot-btn").addEventListener("click", forgot);

// function forgot(e) {
//     alert("Get better memory");
//     e.preventDefault(); // Prevent the default link behavior
//     alert("Badam Khao Memory Badhao");
// }

let typed = new Typed(".type", {
    strings: ["Badam khao","Yaad rakho"],
    smartBackspace: true,
    startDelay: 1000,
    typeSpeed: 130,
    showCursor: false,

    backDelay: 1000,
    backSpeed: 60,
    loop: true,
  });




function forgot(e) {
  e.preventDefault(); // Prevent the default link behavior

  const email = document.getElementById("forgot-email").value;

  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ...
      alert("Password reset email sent!");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage + " (" + errorCode + ")"); // Show the error message in an alert
    });
}
