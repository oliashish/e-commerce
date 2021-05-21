import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../images/girls.jpg";
import image2 from "../../images/makeup.jpg";
import image3 from "../../images/mens.jpg";
import image4 from "../../images/shoes.jpg";

const CoverCarousal = () => {
    const images = [image1, image2, image3, image4];
    return (
        <div className="w-full  ">
            <Fade autoplay infinite className="w-full">
                {images.map((image) => {
                    return (
                        <div className="w-full h-96" key={image}>
                            <img
                                src={image}
                                alt="1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    );
                })}
            </Fade>
        </div>
    );
};

export default CoverCarousal;
