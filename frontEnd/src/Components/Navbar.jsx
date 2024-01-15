import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";

export default function Navbar() {

  let Links = [
    { name: "Home", link: "/home" },
    { name: "Axios Fetch", link: "/normalquery" },
    { name: "React Query Festch", link: "/reactquery" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md z-10 w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-black text-white py-4 md:px-10 px-7 ">
        <Link
          to="/"
          className="font-bold text-2xl cursor-pointer hover:text-red-600 font-[Poppins] 
      text-gray-300"
        >
         Application
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer text-white md:hidden"
        >
          {open ? (
            <MdClose className="text-white" />
          ) : (
            <GiHamburgerMenu className="text-white" />
          )}
        </div>

        <ul
          className={`md:flex md:gap-5 pb-4 px-10 md:px-0 md:items-center md:pb-0 absolute md:static  md:z-auto z-[-1] left-0 w-full bg-black md:w-auto md:pl-0  transition-all duration-500 ease-in ${
            open ? "top-18" : "top-[-490px]"
          }`}
        >
          {
            Links.map((link) => (
              <li
               onClick={() => setOpen(!open)}
                key={link.name}
                className="md:ml-8 pl-9 md:pl-0 hover:underline  text-xl md:my-0 my-7"
              >
                <NavLink
                  to={link.link}
                  className="text-blue-600 font-semibold hover:text-gray-400 duration-500"
                >
                  {link.name}
                </NavLink>
              </li>
            ))
          }

        
        </ul>
      </div>
    </div>
  );
}