import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: "",
};

const slice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        
    },
});


export const selectContacts = state => state.contacts.items;
export const selectFiter = state => state.contacts.filter;
export const contactsReducer = slice.reducer;
export const { deleteContact } = slice.actions;
export const { addContacts } = slice.actions;