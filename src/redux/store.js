import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../redux/categoriesSlice";


export default configureStore({
    reducer:{
       categoriesState:categoriesReducer,
    }
});