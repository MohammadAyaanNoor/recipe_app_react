import React, { useContext, useState } from 'react'
import { recipecontext } from '../contexts/RecipeContext'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdate } from '../store/actions/recipeAction';

const Update = () => {
    const dispatch = useDispatch()
    const {recipes} = useSelector((state)=>state.recipeReducer)
    const {id} = useParams()
    const navigate = useNavigate()
    const recipe = recipes && recipes.find((r)=> r.id === id)
    const [imageURL, setimageURL] = useState(recipe.imageURL);
    const [recipename, setrecipename] = useState(recipe.recipename);
    const [description, setdescription] = useState(recipe.description);
    const [ingredients, setingredients] = useState(recipe.ingredients);
    const [instructions, setinstructions] = useState(recipe.instructions);
    const updateHandler = (e)=>{
        e.preventDefault()
        const updatedRecipe = {
            id: recipe.id,
            recipename,
            imageURL,
            description,
            ingredients,
            instructions,
        };
        dispatch(asyncUpdate(updatedRecipe))
        toast.success("recipe updated successfully")
        navigate('/recipes')
    }
    return recipe ? (
        <form onSubmit={updateHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                onChange={(e) => setimageURL(e.target.value)}
                value={imageURL}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => setrecipename(e.target.value)}
                value={recipename}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    ) : (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">
            Loading Recipe...
        </h1>
    );
};


export default Update