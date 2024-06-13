import shortid from 'shortid';

export const addContact = (state) => {
    return {
        type: "contacts/addContact",
        payload: {
            id: shortid.generate(),
            ...state
        },
    };
};

export const deleteContact = (contactId) => {
    return {
        type: "contacts/deleteContact",
        payload: contactId,
    };
};

export const filterContact = (value) => {
    console.log(value);
    return {
        type: "filter/filterContact",
        payload: value,
    };
};