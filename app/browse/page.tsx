// 'use client'
import React from 'react'
import MainContainer from './MainContainer'
import useNowPlayingMovies from '../utils/customHooks/useNowPlayingMovies'
import { TMDB_API_OPTIONS } from '../utils/constants'
const getData = async () =>{
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    TMDB_API_OPTIONS);

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      console.log("Error while fetching")
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
}
const Browse =async () => {
  const data = await getData();
  console.log(data.results.length)
  return (
    <div className='mt-[100px]'>
      Main container
      {data.results.length}
      <MainContainer data={data} />
    </div>
  )
}

export default Browse