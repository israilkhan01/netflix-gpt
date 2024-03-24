"use client"
import Link from "next/link"
import Image from "next/image"
import LogoImg from "../../public/Netflix_Logo_PMS.png"
import { onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/slices/userSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store/appStore";

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const currentUser = useSelector((store:RootState) => store.user);

    const handleSignOut = () => {
        // console.log("handleSignOut")
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            router.push("/error");
          });
      };

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
              router.push("/");
            } else {
              dispatch(removeUser());
              router.push("/login");
            }
          });
      
          // Unsiubscribe when component unmounts
          return () => unsubscribe();
    },[]);

    console.log(currentUser.user)
        return (
        <div className="w-full fixed left-0 top-0 z-10 flex items-center justify-between px-8 py-2 mb-[10px]">
            <div className="">
                <Link href="/">
                    <Image
                        src={LogoImg}
                        width={200}
                        height={50}
                        alt="logo"
                        priority={true}
                    />
                </Link>
            </div>
            {currentUser.user&&<div className="text-yellow-500 text-lg font-bold flex align-middle">
                <Image
                 src={"https://avatars.githubusercontent.com/u/44443989?v=4"}
                 alt="Profile Photo"
                 width={30}
                 height={30}
                />
              <button
               className="mx-2"
               onClick={handleSignOut}
              >SignOut</button>
            </div>}
            
        </div>
    )
}

export default Header