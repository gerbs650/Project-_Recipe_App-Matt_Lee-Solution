import React from 'react';

function RecipeView({deleteRecipe, index, recipe}) {
  return (
    <tr key={index}>
       <td>{recipe.name} </td>
       <td>{recipe.cuisine} </td>
        <td>
          <img src={recipe.photo} name="photo" alt="photo-holder"/> </td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
        <td><button name="delete" onClick={deleteRecipe}>Delete</button>
      </td>
    </tr>
  )
}
export default RecipeView;