import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import Footer from "../Footer";
import ProductItems from "../ProductListingCards/ProductItems";
import Loading from "../load/Loading";

import { productAll } from "../../state/products/productAction";

const Category = (props) => {
    const { cat } = props.match.params;
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    useEffect(() => {
        dispatch(productAll(cat));
    }, [dispatch, cat]);
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

export default Category;
