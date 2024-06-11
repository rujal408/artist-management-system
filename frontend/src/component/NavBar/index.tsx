import React from "react";
import Link from "next/link";
import Logout from "./Logout";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const Navbar = () => {
  const handleLogout = async () => {
    'use server';
    cookies().delete("accessToken");
    redirect("/");
  };
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1>Artist Mgnt</h1>
            <button
              type="button"
              className="inline-flex items-center md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#fff"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
            <ul className="hidden md:flex gap-x-6 text-white ">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <Logout handleLogout={handleLogout} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
