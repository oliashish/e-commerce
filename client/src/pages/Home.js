import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Footer from "../components/Footer";
import ProductItems from "../components/ProductListingCards/ProductItems";
import Header from "../components/MainHeader/Header";
import Loading from "../components/load/Loading";
import Message from "../components/load/Message";

import { productAction } from "../state/products/productAction";

const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products, error } = productList;
    useEffect(() => {
        dispatch(productAction());
    }, [dispatch]);
    return (
        <div className="home-page">
            {loading ? (
                <Loading />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <ProductItems products={products} />
            )}

            <Footer />
        </div>
    );
};

export default Home;
