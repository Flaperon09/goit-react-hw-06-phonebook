// import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

// export const addContact = (state) => {
//     return {
//         type: "contacts/addContact",
//         payload: {
//             id: shortid.generate(),
//             ...state
//         },
//     };
// };

// export const deleteContact = (contactId) => {
//     return {
//         type: "contacts/deleteContact",
//         payload: contactId,
//     };
// };

// export const filterContact = (value) => {
//     console.log(value);
//     return {
//         type: "filter/filterContact",
//         payload: value,
//     };
// };

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const filterContact = createAction("filter/filterContact");