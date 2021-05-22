import React from "react";

import CoverCarousal from "../components/cover/coverCarousal";
import Header from "../components/mainHeader/Header";
import CategoryCard from "../components/productListingCards/CategoryCard";
import ProductItems from "../components/productListingCards/ProductItems";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <CoverCarousal />
            <CategoryCard />
            <ProductItems />
        </div>
    );
};

export default Home;
