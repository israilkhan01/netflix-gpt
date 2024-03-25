This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# RTK in Next JS with TypeScript
 - create a store file to configure the store
 - create a saparate ReduxProvider.tsx file to Wrap the Provider with children component like e.g. <Provider store = {store}>{children}</Provider>
 - create slices(including the state interface) + Action type
    export the actions and the reducer
 - Now import this slice in store file and configure the reducer with path.


# Authentication using firebase
 - create a AuthContext and wrap it with the RootLayout
 - AuthContext will have onAuthStateChanged function from firebase which will be called when the auth state is changed
 - If user is not authenticated then it will navigate to login page
 - Otherwise it will navigate to browse page
 - Also create a protectedRoute and wrap the page with the protected routes.


# Features
- Login/Signup Page
  - SignIn / SignUp Form
  - Redirect to Browse Page

- Browse (After Authentication)
 - Header
 - Main Movie
    - Trailer in Background
    - Title Description
    - Movie Suggestions
       - Movie List *n 

- NetflixGPT
 - Search Bar
 - Movie Suggestions


# TMDB Movie Database
 - Regiter TMDB API & create an app & get access token
 - Get Data from TMDB now playing movies list API