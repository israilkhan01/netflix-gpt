"use client";

import { useState } from 'react'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = (e:any) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="w-full top-0 h-full absolute bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]" >
        <form className='mt-[100px] bg-gradient-to-bl bg-black-trans p-12 w-fit mx-auto'>
          <h1 className='text-3xl pb-8 text-white'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm&&<div className='w-[330px]'>
            <input className='w-full p-2 my-4 text-white rounded-lg bg-gray-900' type='text' placeholder='Full Name' />
          </div>}
          <div className='w-[330px]'>
            <input className='w-full p-2 my-4 text-white rounded-lg bg-gray-900' type='email' placeholder='Email Address' />
          </div>
          <div className='w-[330px]'>
            <input className='w-full p-2 my-4 text-white rounded-lg bg-gray-900' type='password' placeholder='Password' />
          </div>
          <button className='w-full p-2 my-4 bg-red-600 rounded-lg hover:bg-red-800 text-white'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? <p>
            New to Netflix? <button onClick={toggleSignInForm}>Sign Up Now</button>
          </p> : <p>
            Already registered? <button onClick={toggleSignInForm}>Sign In Now.</button>
          </p>}
        </form>
      </div>
    </div>
  )
}

export default Login;