"use client";

import { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebase from 'firebase/compat/app';
import { auth } from "../utils/firebase";
type ErrorType = null | string;

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<ErrorType>(null);
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);


  const toggleSignInForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };
  const handlebuttonClick = (e: any) => {
    e.preventDefault();
    const EmailId = email.current?.value;
    const Password = password.current?.value;
    if (EmailId != null && Password != null) {
      const message: ErrorType = checkValidData(EmailId , Password);
      setErrorMessage(message);
      if (message) return;


      if (!isSignInForm) {
        //sign up logic

        createUserWithEmailAndPassword(auth, EmailId, Password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user)
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            setErrorMessage(errorCode);
            // ..
          });
      } else {
        //sign in logic

        signInWithEmailAndPassword(auth, EmailId, Password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode);
          });
      }
    }
  }
  return (
    <main>
      <div className="w-full top-0 h-full absolute bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]" >
        <form className='mt-[100px] bg-gradient-to-bl bg-black-trans p-12 w-fit mx-auto'>
          <h1 className='text-3xl pb-8 text-white'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <div className='w-[330px]'>
            <input ref={name} className='w-full p-2 my-4 text-white rounded-lg bg-gray-900' type='text' placeholder='Full Name' />
          </div>}
          <div className='w-[330px]'>
            <input ref={email} className='w-full p-2 my-4 text-white rounded-lg bg-gray-900' type='email' placeholder='Email Address' />
          </div>
          <div className='w-[330px]'>
            <input ref={password} className='w-full p-2 my-4 text-white rounded-lg bg-gray-900' type='password' placeholder='Password' />
          </div>
          {errorMessage && <p className='text-red-500'>
            {errorMessage}
          </p>}
          <button onClick={handlebuttonClick} className='w-full p-2 my-4 bg-red-600 rounded-lg hover:bg-red-800 text-white'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? <p className='text-white'>
            New to Netflix? <button className='font-bold' onClick={toggleSignInForm}>Sign Up Now</button>
          </p> : <p className='text-white'>
            Already registered? <button className='font-bold' onClick={toggleSignInForm}>Sign In Now.</button>
          </p>}
        </form>
      </div>
    </main>
  )
}

export default Login;