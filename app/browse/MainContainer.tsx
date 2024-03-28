"use client"
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { RootState } from "../utils/store/appStore";

const MainContainer = () => {
    const movies: any = useSelector((store: RootState) => store.movies?.nowPlayingMovies);
    console.log(movies);
    if (!movies) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="pt-[30%] bg-black md:pt-0">
            Main Container
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};
export default MainContainer;