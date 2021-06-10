import React from "react";
import { data } from "../../data/data";

const ProdByBrands = () => {
    return (
        <section className="w-full md:p-10 mt-5 border-t-4">
            {data.brands.map((brand, index) => {
                return index % 2 === 0 ? (
                    <div
                        className="w-full md:w-3/4 md:h-80 mx-auto lg:ml-auto my-10 sm:flex md:flex lg:flex"
                        key={brand.title}
                    >
                        <div className="w-10/12 lg:w-1/3 h-80 md:m-0 mx-auto z-10">
                            <img
                                src={brand.image}
                                className="w-full h-full object-cover border-2"
                                alt={brand.title}
                            />
                        </div>
                        <div className="w-10/12 md:w-3/4 lg:w-2/3 md:h-5/6 md:my-auto p-5 mx-auto md:-ml-10 bg-gray-800 md:text-center shadow-2xl">
                            <h2 className="text-3xl text-gray-50 font-bold font-serif">
                                {brand.title}
                            </h2>
                            <p className="text-xl text-gray-200">
                                {brand.description}
                            </p>
                            <button className="w-48 text-xl font-serif font-semibold bg-yellow-200 text-gray-800 px-5 py-2 rounded-full">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                ) : (
                    <div
                        className="md:w-3/4 md:h-80 hidden sm:flex mr-auto my-10"
                        key={brand.title}
                    >
                        <div className="w-10/12 md:w-3/4 lg:w-2/3 md:h-5/6 md:my-auto p-5 md:-mr-10 mx-auto md:text-center bg-gray-800 shadow-2xl">
                            <h2 className="text-3xl text-gray-50 font-bold font-serif">
                                {brand.title}
                            </h2>
                            <p className="text-xl text-gray-200">
                                {brand.description}
                            </p>
                            <button className="w-48 text-xl font-serif font-semibold bg-yellow-200 text-gray-800 px-5 py-2 rounded-full">
                                SHOP NOW
                            </button>
                        </div>
                        <div className="w-10/12 lg:w-1/3 h-full md:m-0 mx-auto">
                            <img
                                src={brand.image}
                                className="w-full h-full object-cover border-2"
                                alt={brand.title}
                            />
                        </div>
                    </div>
                );
            })}
            ;
        </section>
    );
};

export default ProdByBrands;
