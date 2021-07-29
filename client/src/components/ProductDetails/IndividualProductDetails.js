import React, { useEffect, useState } from "react";

import { RatingStar } from "rating-star";
import { useDispatch, useSelector } from "react-redux";
import { detailsProductAction } from "../../state/products/productAction.js";
import Loading from "../load/Loading.js";
import Message from "../load/Message.js";

const IndividualProductDetails = (props) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const productId = props.match.params.productId;
    const productDetails = useSelector((state) => state.productDetail);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(detailsProductAction(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return (
        <div>
            {loading ? (
                <Loading />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <section className="text-gray-600 body-font overflow-hidden flex">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={`./images/${product.image}`}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    {product.brand}
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {product.name}
                                </h1>

                                <p className="leading-relaxed">
                                    {product.desc}
                                </p>
                                <RatingStar
                                    maxScore={5}
                                    id="2342"
                                    noBorder
                                    rating={Math.floor(Math.random() * 10)}
                                />
                                <span>{Math.floor(Math.random() * 500)}</span>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        {product.price}
                                    </span>
                                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Buy Now
                                    </button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg
                                            fill="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 border-l-4 text-center flex flex-col  justify-center items-center">
                        <p className="text-7xl">{Math.floor(product.price)}</p>
                        <p className="text-2xl text-red-500">
                            Status : In Stock
                        </p>
                        <p className="text-2xl">
                            Qty -
                            <input
                                className="w-1/4 border-2 border-gray-300 text-center ml-8"
                                type="number"
                                min="1"
                                max={product.sku}
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            />
                        </p>

                        <button
                            onClick={addToCartHandler}
                            className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-600 rounded"
                        >
                            Add To Cart
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
};

export default IndividualProductDetails;
