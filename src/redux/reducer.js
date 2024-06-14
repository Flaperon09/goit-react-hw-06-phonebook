
// import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./actions";

const initialState = {
  contacts: [{ id: 11, name: 'Yuriy', number: 123456789 }, { id: 12, name: 'Katya', number: 12366554 }],
  filter: '',
};

// export const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "contacts/addContact":
//             return {
//                 ...state,
//                 contacts: [
//                     ...state.contacts,
//                     action.payload,
//                 ],
//             };
//         case "contacts/deleteContact":
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload),
//             };
//         case "filter/filterContact":
//             return {
//                 ...state,
//                 filter: action.payload.toLowerCase(),
//             }
//         default:
//             return state;
//     }
// };

export const rootReducer = createReducer(initialState, builder => {
    builder
        .addCase(addContact, (state, action) => {
            state.contacts.push(action.payload);
        })
        .addCase(deleteContact, (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id !== action.payload);
            state.contacts.splice(index, 1);
        })
        .addCase(filterContact, (state, action) => {
            state.filter = action.payload.toLowerCase();
        })
});
        


//     case filterContact.type:
//             console.log('reducer - state:', state);
//             console.log('action - payload:', action.payload);
//             return {
//                 // ...state,
//                 filter: action.payload,
//                 contacts: state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter)),
//             }
//         default:
//             return state;
//     }
// });

// const filterInitialState = {
//     filter: '',
// };

// const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) {
//         case "filter/filterContact":
//             // const normalizedFilter = action.payload.toLowerCase();
//             // console.log('normalizedFilter: ', normalizedFilter);
//             console.log('reducer - state:', state);
//             console.log('action - payload:', action.payload);
//             return {
//                 ...state,
//                 filter: action.payload.toLowerCase(),
                
//                 contacts: state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter)),
//             }
//         default:
//             return state;
//     }
// };

// // Композиция редюсеров
// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// })