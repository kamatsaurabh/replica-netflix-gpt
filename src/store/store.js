import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer/CombineAllReducer";

const store = configureStore({reducer:rootReducer});

export default store;