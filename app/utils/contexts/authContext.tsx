"use client"
import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from "../firebase";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addUser, removeUser } from '../store/slices/userSlice';

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const router = useRouter()
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log("user",user)
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          setUser(user)
          router.push("/browse");
        } else {
          dispatch(removeUser());
          setUser(null);
          router.push("/login");
        }
        setLoading(false)
      });
  
      // Unsiubscribe when component unmounts
      return () => unsubscribe();
},[]);

  return (
    <AuthContext.Provider value={{ user }}>
      { children}
    </AuthContext.Provider>
  )
}