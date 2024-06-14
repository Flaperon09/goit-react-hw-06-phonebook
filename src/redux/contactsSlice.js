import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [
    { id: 11, name: 'Yuriy', number: 123456789 },
    { id: 12, name: 'Katya', number: 12366554 },
    { id: 13, name: 'Nadya', number: 123456789 }
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(text) {
                return {
                    payload: {
                        text,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;