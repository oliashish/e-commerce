import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductItems = () => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        const getItems = async () => {
            const { data } = await axios.get("/api/product/items");

            let binary = [];
            let imgStr = "";
            let bytes = data.map((img) => {
                return [].slice.call(new Uint8Array(img.image.data));
            });
            bytes.forEach((byte) => {
                byte.forEach((b) => (imgStr += String.fromCharCode(b)));
                binary.push(imgStr);
                imgStr = "";
            });

            const newItems = data.map((d, i) => {
                d.image = [binary[i]].toString();
                return d;
            });
            setItems(newItems);
            console.log(newItems);
        };
        getItems();
    }, []);
    return (
        <section className="text-gray-600 body-font flex justify-around items-center flex-wrap p-5">
            {items.map((item) => {
                return (
                    <div
                        className="sm:w-full md:w-1/3 lg:w-1/5 m-5"
                        key={item.title}
                    >
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-full md:w-full p-4 w-full">
                                <Link
                                    to={item.title + item.id}
                                    className="block relative h-48 rounded overflow-hidden"
                                >
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={item.image}
                                    />
                                </Link>
                                <div className="mt-4">
                                    <h3 className="text-gray-700 text-lg tracking-widest title-font mb-1">
                                        {item.brand}
                                    </h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">
                                        {item.title}
                                    </h2>
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                        {item.desc}
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
