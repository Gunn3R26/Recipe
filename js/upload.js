import {auth,storage,database,dbRef,push,get,onValue,remove,child,ref,deleteObject,uploadBytes,getDownloadURL,getMetadata,listAll } from './app.js';


document.addEventListener("DOMContentLoaded", () => {
//upload image to firebase storage and get url for database

const imageInput = document.getElementById("imageInput");
const recTitle = document.getElementById("rec-title");
const recSource = document.getElementById("rec-source");
const recTiming = document.getElementById("rec-timing");
const recServing = document.getElementById("rec-serving");
const recInstructions = document.getElementById("rec-instructions");
const recSummary = document.getElementById("rec-summary");
const uploadBtn = document.getElementById("uploadBtn");
const selectImageBtn = document.getElementById("select-image");
selectImageBtn.addEventListener("click", () => {
    imageInput.click(); // Simulate a click on the hidden input element
});


uploadBtn.addEventListener("click", async () => {
    try {
		// Get the image file from the input element
        const imageFile = imageInput.files[0];

        // Create a storage reference for the image
        const imageStorageRef = ref(storage, `DishImage/${imageFile.name}`);

        // Upload the image to Firebase Storage
        await uploadBytes(imageStorageRef, imageFile);

        // Get the download URL of the uploaded image
        const imageURL = await getDownloadURL(imageStorageRef);

        // Create an object with recipe details
        let recipeDetails = {
            title: recTitle.value,
            source: recSource.value,
            timing: recTiming.value,
            servings: recServing.value,
            instructions: recInstructions.value,
            summary: recSummary.value,
            imageURL: imageURL
        };
        
        // Push the recipe details to the Firebase Realtime Database
        const recipesRef = dbRef(database, "recipes");
        await push(recipesRef, recipeDetails);
        alert("upload successful");
        console.log("Recipe uploaded successfully!");
        recTitle.value = "";
        recSource.value = "";
        recTiming.value = "";
        recServing.value = "";
        recInstructions.value = "";
        recSummary.value = "";
        imageInput.value = ""; 
        
    } catch (error) {
        console.error("Error:", error);
    }
});


});


