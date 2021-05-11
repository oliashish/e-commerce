import React from "react";
import Carousal from "../components/Carousal";
import Header from "../components/Header";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <Carousal />
        </div>
    );
};

export default Home;
