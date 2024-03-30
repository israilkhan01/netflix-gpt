"use client"
import useNowPlayingMovies from "../utils/customHooks/useNowPlayingMovies";
import LandingContainer from "./LandingContainer";

const MainContainer = ({data}:any) => {
    useNowPlayingMovies(data);
    return (
        <div className="pt-[30%] bg-black text-white md:pt-0">
            <h1>Main Browse Page</h1>
            <LandingContainer/>
        </div>
    );
};
export default MainContainer;