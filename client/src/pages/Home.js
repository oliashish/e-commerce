import React from "react";

import Footer from "../components/Footer";

import ProductItems from "../components/ProductListingCards/ProductItems";
import Header from "../components/MainHeader/Header";

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <ProductItems />
            <Footer />
        </div>
    );
};

export default Home;
