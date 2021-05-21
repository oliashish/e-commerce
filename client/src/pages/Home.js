import React from "react";

import CoverCarousal from "../components/cover/coverCarousal";
import Header from "../components/mainHeader/Header";
import CategoryCard from "../components/productListingCards/CategoryCard";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <CoverCarousal />
            <CategoryCard />
        </div>
    );
};

export default Home;
