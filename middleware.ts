import type { NextRequest } from 'next/server'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from './app/utils/firebase';
import { redirect } from 'next/dist/server/api-utils';
 
export default function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
  console.log("middleware",currentUser)
  onAuthStateChanged(auth, (user) => {
    console.log("inside onAuthStateChanged",user)
    if (user) {
      const uid = user.uid;
      console.log(user)
      return Response.redirect(new URL("/browse",request.url));
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
//   if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
//     return Response.redirect(new URL('/dashboard', request.url))
//   }
 
//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     return Response.redirect(new URL('/login', request.url))
//   }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}