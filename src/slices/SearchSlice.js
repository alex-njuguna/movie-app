import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "movies",
  initialState: {
    text: "",
    movieList: [],
    loading: false,
    movie: [],
  },
  reducers: {
    searchMovie(state, action) {
        state.text = action.payload,
        state.loading = false
    },
  },
});

export const { searchMovie } = searchSlice.actions;
export default searchSlice.reducer;
