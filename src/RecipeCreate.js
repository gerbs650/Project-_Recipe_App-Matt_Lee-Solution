import React, { useState } from "react";

function RecipeCreate({addRecipe}) {

    const initialFormState = {
    name:"",
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation:"",
  }
  
    const [formData, setFormData] = useState({...initialFormState});
    
      const handleRecipeChange = ({target}) => { 
        setFormData({
          ...formData, 
          [target.name]: target.value,
        })
  }
      
      const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe(formData)
        setFormData({...initialFormState})
      }
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form 
      name="create"
      className="create"
      onSubmit={handleSubmit}
      >
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                id="name"
                required={true}
                placeholder="Name"
                onChange={handleRecipeChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                id="cuisine"
                required={true}
                placeholder="Cuisine"
                onChange={handleRecipeChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                id="photo"
                required={true}
                placeholder="Image URL"
                onChange={handleRecipeChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                type="ingredients"
                id="name"
                required={true}
                placeholder="Ingredients"
                onChange={handleRecipeChange}
                value={formData.ingredients}
              />
            </td>
             <td>
              <textarea
                name="preparation"
                type="ingrediepreparationnts"
                id="name"
                required={true}
                placeholder="Preparation"
                onChange={handleRecipeChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
