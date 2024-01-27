import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white p-4 text-black shadow-md mt-[190px] tb:fixed  tb:left-0 tb:h-full tb:flex tb:flex-col tb:items-center md:fixed md:mt-[-320px] tb:mt-[-320px] md:left-0 md:h-full md:flex md:flex-col md:items-center border border-[#e0e0e0]">
      <ul className="flex flex-row md:flex-col tb:flex-col space-x-16 md:space-x-0 tb:space-x-0 md:space-y-4 md:mr-3 tb:space-y-4 ml-4 md:ml-2 tb:ml-[-20px] tb:mr-[-15px]">
        <li>
          <Link href="/Home">
            <div className="flex items-center">
              <img
                className="h-15 w-8 md:w-14 md:px-4 md:pt-3 md:pb-2 tb:w-14 tb:px-4 tb:pt-3 tb:pb-2"
                src="/images/home.svg"
                alt="logo"
              />
              <span className="hidden md:block tb:block lg:block">Home</span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/Explore">
            <div className="flex items-center ">
              <img
                className="h-15 w-8 md:w-14 md:px-4 md:pt-3 md:pb-2 tb:w-14 tb:px-4 tb:pt-3 tb:pb-2"
                src="/images/explore.svg"
                alt="logo"
              />
              <span className="hidden md:block tb:block lg:block">Explore</span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/Create">
            <div className="flex items-center">
              <img
                className="h-15 w-8 md:w-14  md:px-4 md:pt-3 md:pb-2 tb:w-14 tb:px-4 tb:pt-3 tb:pb-2"
                src="/images/create.svg"
                alt="logo"
              />
              <span className="hidden md:block tb:block lg:block">Create</span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/Profile">
            <div className="flex items-center">
              <img
                className="h-15 w-8 md:w-14 md:px-4 md:pt-3 md:pb-2 tb:w-14 tb:px-4 tb:pt-3 tb:pb-2"
                src="/images/profile.svg"
                alt="logo"
              />
              <span className="hidden md:block tb:block lg:block">Profile</span>
            </div>
          </Link>
        </li>
      </ul>

      <div className="hidden md:block md:mt-64">
        <Link href="/landingpage">
          {" "}
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            Logout
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
