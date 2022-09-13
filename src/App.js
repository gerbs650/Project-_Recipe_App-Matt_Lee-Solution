import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData); // useState is making the recipes and setRecipes variable

  const addRecipe = (recipeToAdd) => setRecipes([...recipes, recipeToAdd]); //use setRecipes for new state
  // add the existing recipes to the recipe list, using previous recipelist
  //state variables tells broswer to rerender

  const deleteRecipe = (
    recipeToDelete //use receipeIndexToDelete to inform you were specifically by the ID
  ) =>
    setRecipes(
      (currentRecipes) =>
        currentRecipes.filter((recipe, index) => index !== recipeToDelete) // filter makes an array of new copy
    ); //mutability = changing an existing array

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />

      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}
// React.createElement(RecipeList, props)
export default App;
