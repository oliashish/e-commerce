import React from "react";

import CoverCarousal from "../components/cover/coverCarousal";
import Footer from "../components/Footer";
import Header from "../components/mainHeader/Header";
import CategoryCard from "../components/productListingCards/CategoryCard";
import ProductItems from "../components/productListingCards/ProductItems";

const Home = () => {
    return (
        <div className="home-page">
            <CoverCarousal />
            <CategoryCard />
            <ProductItems />
            <Footer />
        </div>
    );
};

export default Home;
