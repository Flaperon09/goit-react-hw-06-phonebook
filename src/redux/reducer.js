import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./2actions";

const initialState = {
  contacts: [{id: 1, name: 'Kolya', number: 123456}],
  filter: '',
};

export const rootReducer = createReducer(initialState, builder => {
    builder
        .addCase(addContact, (state, action) => {
            state.contacts.push(action.payload);
        })
        .addCase(deleteContact, (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        })
        .addCase(filterContact, (state, action) => {
            state.filter = action.payload.toLowerCase();
        })
});