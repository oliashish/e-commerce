import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const Header = () => {
  const NavLinks = ["Home", "Mens", "Womens", "Kids", "Beauty"];
  return (
    <header className="mt-0 border-b-2">
      <nav
        className="flex justify-around items-center shadow-sm"
        role="navigation"
      >
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="">
          <Link to="/">
            <img
              src={logo}
              alt="aura apex"
              className="w-32 md:w-48 lg:w-50 mt-3"
            ></img>
          </Link>
        </div>
        <div className="flex justify-between items-center relative"></div>
        <div className="pr-8 md:block hidden">
          {NavLinks.map((link) => {
            return (
              <Link to={link.toLowerCase()} className="p-4 text-xl">
                {link}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-between aligns-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 mx-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
