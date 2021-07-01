import React from "react";

import CoverCarousal from "../components/hero/coverCarousal";
import Footer from "../components/Footer";

import CategoryCard from "../components/productListingCards/CategoryCard";
import ProdByBrands from "../components/productListingCards/ProdByBrands";
import ProductItems from "../components/productListingCards/ProductItems";
import Header from "../components/mainHeader/Header";

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
