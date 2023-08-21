# Recipe Website Readme

Welcome to the Recipe Website! This readme provides an overview of the features and functionalities of the website, as well as instructions for developers on how to set up and deploy the project.

## Table of Contents

1. Introduction
2. Features
3. Technologies Used
4. Installation
5. Configuration
6. Usage
7. API Documentation
8. Contribution
9. License

## 1. Introduction

The Recipe Website is a platform that allows users to search for recipes, log in, sign up, and even upload their own recipes. The website is built with Firebase integration for user authentication and data storage. Additionally, it provides an API that enables users to search for recipes based on various criteria.

## 2. Features

- User Authentication: Users can sign up and log in using their email and password through Firebase Authentication.

- Recipe Search: Users can search for recipes using keywords, ingredients, or categories.

- User Profile: Authenticated users have a personalized profile where they can view and manage their uploaded recipes.

- Recipe Upload: Authenticated users can upload their own recipes, complete with title, ingredients, instructions, and images.

- API Access: The website offers an API endpoint that allows developers to retrieve recipe information for integration with other applications.

## 3. Technologies Used

- Frontend: HTML, CSS, JavaScript
- Database: Firebase Realtime Database and Firebase Storage
- User Authentication: Firebase Authentication

## 4. Installation

1. Clone the repository: `git clone [<repository-url>](https://github.com/Gunn3R26/Recipe.git)`
2. Navigate to the project directory: `cd recipe-website`
3. Firebase Config of your form firebase consosle

## 5. Configuration

1. Create a Firebase project and set up Firebase Authentication and Firestore.
2. Add your Firebase configuration details to the project's configuration files.

## 6. Usage

1. Start the development server: `npm start`
2. Open your web browser and navigate to `http://localhost:3000` to access the website.

## 7. API Documentation

The API endpoint for recipe search is located at `/api/search`. You can send GET requests to this endpoint with various query parameters to retrieve recipe data.

Example API Request:
```
GET https://api.spoonacular.com/recipes/complexSearch
```

Example API Response:
```json
[
 {
  "results": [
    {
      "vegetarian": false,
      "vegan": false,
      "glutenFree": true,
      "dairyFree": false,
      "veryHealthy": false,
      "cheap": false,
      "veryPopular": false,
      "sustainable": false,
      "lowFodmap": false,
      "weightWatcherSmartPoints": 2,
      "gaps": "no",
      "preparationMinutes": -1,
      "cookingMinutes": -1,
      "aggregateLikes": 6,
      "healthScore": 6,
      "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
      "license": "CC BY 3.0",
      "sourceName": "Foodista",
      "pricePerServing": 115.13,
      "id": 637876,
      "title": "Chicken 65",
      "readyInMinutes": 45,
      "servings": 6,
      "sourceUrl": "http://www.foodista.com/recipe/G4XPLKBW/chicken-65-chicken-marinaded-in-traditional-indian-spices-and-deep-fried",
      "image": "https://spoonacular.com/recipeImages/637876-312x231.jpg",
      "imageType": "jpg",
      "summary": "Chicken 65 could be just the <b>gluten free</b> recipe you've been looking for. This hor d'oeuvre has <b>121 calories</b>, <b>19g of protein</b>, and <b>3g of fat</b> per serving. For <b>$1.15 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. Head to the store and pick up salt, chili powder, yogurt, and a few other things to make it today. 6 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>not so spectacular spoonacular score of 39%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1243251\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1230059\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1224321\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>.",
      "cuisines": [ ],
      "dishTypes": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ],
      "diets": [
        "gluten free"
      ],
      "occasions": [ ],
      "analyzedInstructions": [
        {
          "name": "",
          "steps": [
            {
              "number": 1,
              "step": "Take a large bowl mix in the ginger and garlic paste, yogurt, red chilly powder, turmeric powder, and salt.",
              "ingredients": [
                {
                  "id": 2043,
                  "name": "turmeric",
                  "localizedName": "turmeric",
                  "image": "turmeric.jpg"
                },
                {
                  "id": 2009,
                  "name": "chili powder",
                  "localizedName": "chili powder",
                  "image": "chili-powder.jpg"
                },
                {
                  "id": 10111215,
                  "name": "garlic paste",
                  "localizedName": "garlic paste",
                  "image": "garlic-paste.png"
                },
                {
                  "id": 11216,
                  "name": "ginger",
                  "localizedName": "ginger",
                  "image": "ginger.png"
                },
                {
                  "id": 1116,
                  "name": "yogurt",
                  "localizedName": "yogurt",
                  "image": "plain-yogurt.jpg"
                },
                {
                  "id": 2047,
                  "name": "salt",
                  "localizedName": "salt",
                  "image": "salt.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404783,
                  "name": "bowl",
                  "localizedName": "bowl",
                  "image": "bowl.jpg"
                }
              ]
            },
            {
              "number": 2,
              "step": "Mix well to from smooth and thick paste, add the chicken pieces to the masala paste and  marinaded for 4 hours.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                }
              ],
              "equipment": [ ],
              "length": {
                "number": 240,
                "unit": "minutes"
              }
            },
            {
              "number": 3,
              "step": "Heat enough oil in a pan to deep fry the marinaded chicken pieces. Deep fry the chicken pieces in batches till crisp and golden color.Note: The taste of the Chicken 65 depends mainly on the amount of time it gets marinated in the masala, it is best to marinate the chicken pieces the day before.",
              "ingredients": [
                {
                  "id": 1005006,
                  "name": "chicken pieces",
                  "localizedName": "chicken pieces",
                  "image": "chicken-parts.jpg"
                },
                {
                  "id": 5006,
                  "name": "whole chicken",
                  "localizedName": "whole chicken",
                  "image": "whole-chicken.jpg"
                },
                {
                  "id": 4582,
                  "name": "cooking oil",
                  "localizedName": "cooking oil",
                  "image": "vegetable-oil.jpg"
                }
              ],
              "equipment": [
                {
                  "id": 404645,
                  "name": "frying pan",
                  "localizedName": "frying pan",
                  "image": "pan.png"
                }
              ]
            }
          ]
        }
      ],
      "spoonacularSourceUrl": "https://spoonacular.com/chicken-65-637876"
//other recipes

```




