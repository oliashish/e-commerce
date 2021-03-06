import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Footer from "../components/Footer";
import ProductItems from "../components/ProductListingCards/ProductItems";
import Loading from "../components/load/Loading";

import { productAll } from "../state/products/productAction";

const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    useEffect(() => {
        dispatch(productAll());
    }, [dispatch]);
    return (
        <div className="home-page">
            {loading ? (
                <Loading color="black" loading={loading} size={50} />
            ) : (
                <>
                    <ProductItems products={products} />
                    <Footer />
                </>
            )}
        </div>
    );
};

export default Home;
