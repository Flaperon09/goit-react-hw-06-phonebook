// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
    reducer: rootReducer,
});

// export const store = configureStore({
//     reducer: {
//         contacts: rootReducer,
//         filters: rootReducer,
//     },
// });