import React from "react";

import data from "../../data/data";
import SwiperBreakpoints from "./swiperConfig";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Autoplay, Mousewheel } from "swiper/core";

SwiperCore.use([Pagination, Autoplay, Mousewheel]);

const CategoryCard = () => {
    return (
        <section className="w-full mx-auto flex justify-around items-center mt-20 border-b-2 pb-8">
            <Swiper
                loop="true"
                centerwhee="true"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}
                {...SwiperBreakpoints}
            >
                {data.productCategory.map((category) => {
                    return (
                        <SwiperSlide className="">
                            <div className="lg:w-full px-10 mx-auto h-96 mb-5 text-center">
                                <div className="w-60 mx-auto h-64 md:h-56 mt-5 rounded-full shadow-2xl">
                                    <img
                                        src={category.image}
                                        alt="this is dummy alt"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                <p className="text-2xl mt-5 font-serif font-semibold">
                                    {category.type}
                                </p>
                                <p className="text-lg opacity-70 text-opacity-10">
                                    {category.description}
                                </p>
                                <p className="text-2xl font-serif font-semibold">
                                    {category.discount}
                                </p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default CategoryCard;
