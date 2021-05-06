import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/auraapexlogo.png";
import "../styles/Home.css";

const Home = () => {
    const NavLinks = ["MENS", "WOMENS", "KIDS"];
    return (
        <div className="home-page">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="AURA-APEX" className="logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-5">
                        {NavLinks.map((link) => {
                            return (
                                <li
                                    className="nav-item"
                                    key={link.toLowerCase()}
                                >
                                    <Link
                                        className="nav-link font"
                                        to={link.toLowerCase()}
                                    >
                                        {link}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0 form-alignment">
                    <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Search
                    </button>
                </form>
                <div className="info-icons ml-5">
                    <i class="fas fa-bell fa-2x mx-2"></i>
                    <i class="fas fa-shopping-cart fa-2x mx-2"></i>
                    <i class="fas fa-user fa-2x mx-2"></i>
                </div>
            </nav>
        </div>
    );
};

export default Home;
