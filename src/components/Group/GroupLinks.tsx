"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {
    Search ,CircleEllipsis
} from "lucide-react";

function GroupLinks() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const activeLinkClass = "text-[#10676B]";
  const linkClass = "flex items-center px-2 py-1 sb:px-2 sb:ml-1 sbb:px-2 sbb:ml-3 tb:px-4 tb:py-2 tb:mr-5 md:ml-0 md:mr-3 rounded md:px-4 md:py-2  lg:px-4 lg:py-2 lg:mr-3  hover:text-[#85b3b6] hover:bg-[#F2F2F2]";
  return (
    <section className="flex mt-3 w-full shadow-sm">
      <div>
    <nav className=" ">
       <ul className="flex">
        <li>
          <Link href="/GroupLinks/Discussion">
            <div className={`${linkClass} ${isActive('/GroupLinks/Discussion') ? activeLinkClass : ''}`}>
              <span className="" >
                Discussion
              </span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/GroupLinks//Members">
            <div className={`${linkClass} ${isActive('/GroupLinks/Discussion') ? activeLinkClass : ''}`}>
              <span className="">
                Members
              </span>
            </div>
          </Link>
        </li>

        <li>
          <Link href="/GroupLinks//Events">
            <div className={`${linkClass} ${isActive('/GroupLinks/Discussion') ? activeLinkClass : ''}`}>
              <span className="">
                Events
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/GroupLinks//Media">
            <div className={`${linkClass} ${isActive('/GroupLinks/Discussion') ? activeLinkClass : ''}`}>
              <span className="">
               Media
              </span>
            </div>
          </Link>
        </li>
       
          </ul>
    </nav>
    </div>
     <div className="absolute right-0 mr-20  flex">
      <div className="items-center px-3 py-2"> <Search/></div>
    <div className="items-center px-3 py-2"><CircleEllipsis /></div>
    </div>
     </section>
  );
}

export default GroupLinks;
