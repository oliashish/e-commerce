import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

const Header = () => {
    const NavLinks = ["Home", "Mens", "Womens", "Kids", "Beauty"];
    return (
        <header className="mt-0 pl-5">
            <nav
                className="flex justify-between items-center shadow-sm"
                role="navigation"
            >
                <Link to="/" className="">
                    <img
                        src={logo}
                        alt="aura apex"
                        className="w-48 h-20 mt-5"
                    ></img>
                </Link>
                <div className="flex justify-between items-center relative">
                    <div className="mr-10 pt-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <div className="pr-8 md:block hidden">
                        {NavLinks.map((link) => {
                            return (
                                <Link
                                    to={link.toLowerCase()}
                                    className="p-4 text-xl"
                                >
                                    {link}
                                </Link>
                            );
                        })}
                    </div>
                </div>
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
            </nav>
        </header>
    );
};

export default Header;
