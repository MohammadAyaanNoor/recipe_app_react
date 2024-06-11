import { createSlice } from "@reduxjs/toolkit";


const initialState = ()=>{
   recipes : []
}


export const recipeSlice = createSlice({
    name:"cookbook",
    initialState,
    reducers:{
        load:(state,action)=>{
            state.recipes = action.payload
        }
    }
})
export const {load} = recipeSlice.actions
export default recipeSlice.reducer