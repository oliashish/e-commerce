import React from "react";

import CoverCarousal from "../components/cover/coverCarousal";
import Footer from "../components/Footer";

import CategoryCard from "../components/productListingCards/CategoryCard";
import ProdByBrands from "../components/productListingCards/ProdByBrands";
import ProductItems from "../components/productListingCards/ProductItems";

const Home = () => {
    return (
        <div className="home-page">
            <CoverCarousal />
            <CategoryCard />
            <ProductItems />
            <ProdByBrands />
            <Footer />
        </div>
    );
};

export default Home;
