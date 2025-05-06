import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name : "theme",
    initialState : {theme : "light"},
    reducers : {
        toggleTheme : (state,action)=>{
            state.theme = (state.theme === "light") ? "dark" : "light";
        }
    }
});

console.log(ThemeSlice);

export const {toggleTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;