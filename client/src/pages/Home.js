import React from "react";
import CoverCarousal from "../components/cover/coverCarousal";

import Header from "../components/mainHeader/Header";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <CoverCarousal />
        </div>
    );
};

export default Home;
