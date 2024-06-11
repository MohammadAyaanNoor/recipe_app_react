import { toast } from "react-toastify";
import { load } from "../reducers/recipeReducer";

export const asyncload =()=>async(dispatch,getState)=>{
    try {
        setTimeout(()=>{
            dispatch(load(JSON.parse(localStorage.getItem("recipes"))))
        },1000)
    } catch (error) {
        console.log(error)
    }
}

export const asyncadd = (recipe)=>async(dispatch,getState)=>{
    try {
        setTimeout(()=>{
            const {recipes} = getState().recipeReducer
            localStorage.setItem("recipe",JSON.stringify([...recipes,recipe]))
        },2000)
    } catch (error) {
        toast.error(error)
    }
}