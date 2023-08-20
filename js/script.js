import {auth,storage,database,dbRef,push,get,onValue,remove,child,ref,deleteObject,uploadBytes,getDownloadURL,getMetadata,listAll } from './app.js';


$(document).ready(function () {
    $(".on").click(function () {
        $('.alert').css({
            'transform': 'translateX(10%)',
            
        });
    });

    $(".close").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    });

    $(".out").click(function () {
        $('.alert').css({
            'transform': 'translateX(150%)',
        });
    })
})

// RECIPE API
const apiKey="76c5b0f29efc46e6ab151d85fe1ad061"
// Get a reference to the div where the fetched data will be displayed
const searchButton = document.querySelector('button[type="submit"]');
const searchInput = document.querySelector('input[type="text"]');
const recipeContainer = document.getElementById('recipeContainer');




searchButton.addEventListener('click', () => {

  const searchTerm = searchInput.value;
  if (searchTerm.trim() !== '') {
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}&addRecipeInformation=true&addRecipeNutrition=false&addRecipeNutrition=false`)
          .then(response => response.json())
          .then(data => {
              displayRecipes(data.results);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }
});



function displayRecipes(recipes) {
    recipeContainer.innerHTML = ''; // Clear previous results

    if (recipes.length > 0) {
        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');

            const instructions = recipe.analyzedInstructions[0]?.steps || [];
            const instructionsHTML = instructions.map(step => `<li style="list-style-type: disc; margin-left: 20px;">${step.step}<br></li>`).join('');

            // Remove the similar recipe links from the summary
            const summaryWithoutSimilar = recipe.summary.replace(/Similar recipes are.*\./, '');
            
            recipeDiv.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
                <p>Source:</p>  <a href="${recipe.sourceUrl}" target="blank">${recipe.sourceName}</a>

               
                <p>Ready in: ${recipe.readyInMinutes} minutes</p>
                <p>Servings: ${recipe.servings}</p>
                <h3>Instructions:</h3>
                <ul>${instructionsHTML}</ul>
                <h3>Summary</h3>
                <p>${summaryWithoutSimilar}</p>
            `;

            recipeContainer.appendChild(recipeDiv);
        });
    } else {
        recipeContainer.innerHTML = 'No results found.';
    }
}






document.addEventListener('DOMContentLoaded', () => {
    const recipeList = document.getElementById('recipeList');

    if (recipeList) {
        onValue(dbRef(database, "recipes"), (snapshot) => {
            recipeList.innerHTML = "";
            snapshot.forEach((childSnapshot) => {
                const recipe = childSnapshot.val();
                const li = document.createElement('li');
                li.innerHTML = `
                    <h2>${recipe.title}</h2>
                    <img src="${recipe.imageURL}" alt="Recipe Image" width="200">
                    <p>Source: ${recipe.source}</p>
                    <p>Timing: ${recipe.timing}</p>
                    <p>Servings: ${recipe.servings}</p>
                    <p>Instructions: ${recipe.instructions}</p>
                    <p>Summary: ${recipe.summary}</p>
                `;
                recipeList.appendChild(li);
            });
        });
    } else {
        console.error("Recipe list element not found.");
    }
});
