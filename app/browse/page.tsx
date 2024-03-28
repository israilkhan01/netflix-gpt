'use client'
import React from 'react'
import MainContainer from './MainContainer'
import useNowPlayingMovies from '../utils/customHooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className='mt-[100px]'>
      <MainContainer/>
    </div>
  )
}

export default Browse