import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterStr: "",
};

const slice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        search: (state, action) => {
            state.filterStr = action.payload
        }
        
    },
});



export const selectFilter = state => state.filter.filterStr;
export const filterReducer = slice.reducer;
export const { search } = slice.actions;