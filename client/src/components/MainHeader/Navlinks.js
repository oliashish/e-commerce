import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
    const NavLinks = ["Home", "Mens", "Womens", "Kids"];
    return (
        <div className="pr-8 md:flex hidden">
            {NavLinks.map((link) => {
                return (
                    <Link
                        to={link.toLowerCase()}
                        className="p-4 text-xl"
                        key={link.toLowerCase()}
                    >
                        <h3> {link} </h3>
                    </Link>
                );
            })}
        </div>
    );
};

export default Navlinks;
