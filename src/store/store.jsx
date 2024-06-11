import { configureStore } from "@reduxjs/toolkit";
import {recipeSlice} from "./reducers/recipeReducer";



export const store = configureStore({
    reducer:{
        recipeReducer: recipeSlice
    }
})