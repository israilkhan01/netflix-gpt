"use client";
import Image from "next/image";
import Header from "./Header/Header";
import { useRouter } from "next/router";
import ProtectedRoute from "./utils/HOCs/ProtectedRoute";

export default function Home() {

  return (
    <ProtectedRoute>
      <main className="text-center relative top-[100px]">
        <h1>Home Page</h1>
      </main>
    </ProtectedRoute>
  );
}
