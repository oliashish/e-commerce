import React from "react";
import { RatingStar } from "rating-star";
import { Link } from "react-router-dom";

const ProductItems = ({ products }) => {
    return (
        <section className="text-gray-600 body-font flex justify-around items-center flex-wrap p-5">
            {products.map((product) => {
                return (
                    <div
                        className="sm:w-full md:w-1/3 lg:w-1/5 m-5"
                        key={product.id}
                    >
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-full md:w-full p-4 w-full">
                                <Link
                                    to={`/product/${product.id}`}
                                    className="block relative h-48 rounded overflow-hidden"
                                >
                                    <img
                                        alt={product.name}
                                        className="object-cover object-center w-full h-full block"
                                        src={`../../uploads/${product.image}`}
                                    />
                                </Link>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        {product.name}
                                    </h2>
                                    <h6 className="text-gray-700 text-lg tracking-widest title-font mb-1">
                                        {product.brand}
                                    </h6>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        {product.desc}
                                    </h3>
                                    <RatingStar
                                        maxScore={5}
                                        id={product.id}
                                        noBorder
                                        rating={Math.floor(Math.random() * 10)}
                                    />
                                    <span>
                                        {Math.floor(Math.random() * 500)}
                                    </span>
                                    <p className="mt-1">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ProductItems;
