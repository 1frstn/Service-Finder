import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories:[],
}

export const categoriesSlice = createSlice({
    name:"categoriesState",
    initialState,
    reducers:{
        setCategories : (state,action) => {
            console.log("ACTION>>>",action);
            state.categories = action.payload 
        }
    }
});

export default categoriesSlice.reducer;
export const {setCategories} = categoriesSlice.actions;
