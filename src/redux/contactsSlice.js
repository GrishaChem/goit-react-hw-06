import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [{ name: 'Hello world', id: 1, completed: false, number: "0660606" }],
};

const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        deleteContact: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        addContacts: (state, action) => {
            state.items.push(action.payload)
        },
    },
});


export const selectContacts = state => state.contacts.items;
export const selectFiter = state => state.contacts.filter;
export const contactsReducer = slice.reducer;
export const { deleteContact } = slice.actions;
export const { addContacts } = slice.actions;