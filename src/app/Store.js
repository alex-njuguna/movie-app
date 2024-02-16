import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../slices/SearchSlice";

const store = configureStore({
    reducer: {
        movies: searchSlice
    }
})

export default store