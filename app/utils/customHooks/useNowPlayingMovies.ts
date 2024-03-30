"use client"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/movieSlices";
// import { TMDB_API_OPTIONS } from "../constants";
import { TMDB_API_OPTIONS } from "@/app/utils/constants"
import { RootState } from "../store/appStore";

const useNowPlayingMovies = (data:any) => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store: RootState) => store.movies.nowPlayingMovies
  );
  const getNowPlayingMovies = async (data:any) => {
    const json = await data;
    console.log("Json Results of movies", json.results)
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies(data);
  }, []);
};

export default useNowPlayingMovies;