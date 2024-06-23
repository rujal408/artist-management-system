import React from "react";
import Link from "next/link";
import Logout from "./Logout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Navbar = () => {
  const handleLogout = async () => {
    "use server";
    cookies().delete("accessToken");
    redirect("/");
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-2 mb-2">
      <Link
        href="/dashboard"
        className="flex items-center flex-shrink-0 text-white mr-6 gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="64"
          height="64"
        >
          <circle cx="32" cy="32" r="32" fill="#f0f0f0" />
          <path
            d="M28 16v6c-2 0-4 .5-5.5 1.5l-1.5 1V32l1.5 1c1.5 1 3.5 1.5 5.5 1.5v6c-1 0-1 0-2.5-.5l-1.5-.5v-6.5l-6-2.5v7c1 1 3.5 2 6 2s5-.5 6.5-1.5l1.5-1v-8.5l-1.5-1c-1.5-.5-2.5-1.5-4.5-2V18l1-1c2-1 4.5-1 7-1v-6h-4zm8 2v1.5c1.5.5 2.5 1.5 4.5 2l1.5 1V32l-1.5 1c-1.5.5-3 .5-4.5 1v6c2 .5 3.5 1.5 5.5 2.5l1.5 1v-10c-2-1-4.5-1-7-1v-6.5c1-1 3.5-2 6-2l1.5-.5V18c-1-1-3.5-2-6-2h-1.5zm-6 2v3c1.5 0 3.5.5 5.5 1.5l1.5 1V28c-2 1-4.5 1-7 1v-6zm0 7v5c1.5 0 3.5.5 6 1v7c-2-.5-4.5-.5-7-.5V25z"
            fill="#333"
          />
          <path
            d="M16 48l8-16 8 8 8-12 8 20"
            stroke="#333"
            strokeWidth="4"
            fill="none"
          />

          <circle cx="24" cy="32" r="2" fill="#333" />
          <circle cx="32" cy="40" r="2" fill="#333" />
          <circle cx="40" cy="28" r="2" fill="#333" />
          <circle cx="48" cy="48" r="2" fill="#333" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Artist MGNT
        </span>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            href="/artist"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Artist
          </Link>

          <Link
            href="/music"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Music
          </Link>
        </div>
        <div className="flex gap-2">
          <Logout handleLogout={handleLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
