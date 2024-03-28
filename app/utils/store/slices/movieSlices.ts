import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface moviesState{
    nowPlayingMovies: Object|null,
    popularMovies: Object|null,
    trailerVideo: Object|null,
  }
const initialState:moviesState = {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
  }
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
      addNowPlayingMovies: (state, action:PayloadAction<object>) => {
        state.nowPlayingMovies = action.payload;
      },
      addPopularMovies: (state, action:PayloadAction<object>) => {
        state.popularMovies = action.payload;
      },
      addTrailerVideo: (state, action:PayloadAction<object>) => {
        state.trailerVideo = action.payload;
      },
    },
  });
  
  export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } =
    moviesSlice.actions;
  
  export default moviesSlice.reducer;