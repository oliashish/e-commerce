import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data";

const ProductItems = () => {
    return (
        <section className="text-gray-600 body-font flex justify-around items-center flex-wrap">
            {data.productItems.map((item) => {
                return (
                    <div className="sm:w-full md:w-1/3 lg:w-1/5 m-5">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-full md:w-full p-4 w-full">
                                <Link
                                    to={item.title}
                                    className="block relative h-48 rounded overflow-hidden"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={item.image}
                                    />
                                </Link>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        {item.title}
                                    </h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        {item.description}
                                    </h3>
                                    <h3 className="text-gray-700 text-lg tracking-widest title-font mb-1">
                                        {item.reviews}
                                    </h3>
                                    <p className="mt-1">{item.price}</p>
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
