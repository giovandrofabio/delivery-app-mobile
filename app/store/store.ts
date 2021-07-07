import { configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loading/loading.reducers";

export const reducers = {
    loading: loadingReducer
};

export const store= configureStore({
    reducer: reducers
})