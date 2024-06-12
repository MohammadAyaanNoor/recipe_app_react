import { toast } from "react-toastify";
export {} from '../reducers/recipeReducer'
import { load } from "../reducers/recipeReducer";

export const asyncload =()=>async(dispatch,getState)=>{
    try {
        setTimeout(()=>{
            dispatch(load(JSON.parse(localStorage.getItem("recipes")) || []))
        },1000)
    } catch (error) {
        console.log(error)
    }
}

export const asyncadd = (recipe)=>async(dispatch,getState)=>{
    try {
        // setTimeout(()=>{
            const {recipes} = getState().recipeReducer
            localStorage.setItem("recipes", JSON.stringify([...recipes, recipe]));
            dispatch(asyncload());
        // },2000)
    } catch (error) {
        toast.error(error)
    }
}

export const asyncRemove = (id) => async(dispatch,getState)=>{
    try {
        const {recipes} = getState().recipeReducer
        localStorage.setItem('recipes',JSON.stringify(recipes.filter((r)=> r.id != id)))
        dispatch(asyncload())
    } catch (error) {
        toast.error(error)
    }
}

export const asyncUpdate = (updatedRecipe) => async(dispatch,getState)=>{
    try {
        const {recipes} = getState().recipeReducer
        const copyrecipe = [...recipes]
        const index = copyrecipe.findIndex((r)=>r.id == updatedRecipe.id)
        copyrecipe[index] = updatedRecipe
        localStorage.setItem('recipes',JSON.stringify(copyrecipe))
        dispatch(asyncload())
    } catch (error) {
        toast.error(error)
    }
}