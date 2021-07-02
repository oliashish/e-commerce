import React from "react";

import CoverCarousal from "../components/Hero/coverCarousal";
import Footer from "../components/Footer";

import CategoryCard from "../components/ProductListingCards/CategoryCard";
import ProdByBrands from "../components/ProductListingCards/ProdByBrands";
import ProductItems from "../components/ProductListingCards/ProductItems";
import Header from "../components/MainHeader/Header";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <CoverCarousal />
            <CategoryCard />
            <ProductItems />
            <ProdByBrands />
            <Footer />
        </div>
    );
};

export default Home;
