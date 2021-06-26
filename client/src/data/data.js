// category card image imports
import womensdresses from "../images/womensdresses-compressed.jpg";
import mensshirtcategory from "../images/mensshirtcategory-compressed.jpg";
import mensshoescategory from "../images/mensshoescategory-compressed.jpg";
import sportswear from "../images/sportswear-compressed.jpg";
import haircare from "../images/haircare-compressed.jpg";

// product list image imports
import cap from "../images/menscap.jpg";
import shirt from "../images/mensshirts.jpeg";
import lower from "../images/menslower.jpeg";
import dresses from "../images/womensdrsss.jpeg";
import top from "../images/womenstops.jpeg";
import womenjeans from "../images/womensjeans.jpg";
import makeup from "../images/makeup.jpeg";
import shoe from "../images/shoes.jpeg";

// product by brand image imports

import nike from "../images/nikelogo.jpg";
import addias from "../images/addidas.png";
import zara from "../images/zara.png";
import lv from "../images/lv.png";
import levis from "../images/levis.jpeg";

export const data = {
    productCategory: [
        {
            image: womensdresses,
            type: "WOMEN'S DRESSES",
            description: "Dresses,Tops,Jeans etc",
            discount: "UPTO 50% OFF",
        },
        {
            image: mensshirtcategory,
            type: "MEN'S SHIRTS",
            description: "Get your favourite shirts",
            discount: "10% OFF",
        },
        {
            image: mensshoescategory,
            type: "MEN'S SHOES",
            description: "Nike, Adidas etc",
            discount: "FLAT 15% OFF",
        },
        {
            image: sportswear,
            type: "SPORTS WEAR",
            description: "Get fit and healthy",
            discount: "UPTO 30% OFF",
        },
        {
            image: haircare,
            type: "HAIR CARE",
            description: "Get stronger hairs",
            discount: "20% ON COMBO",
        },
    ],
    productItems: [
        {
            image: shirt,
            title: "Half sleeve shirt",
            description: "best half sleeve shirt",
            reviews: "4.5/5",
            price: "500",
        },
        {
            image: cap,
            title: "Men's Cap",
            description: "nike cap, the name speaks for it",
            reviews: "5/5",
            price: "600",
        },
        {
            image: lower,
            title: "mens lower",
            description: "comfy loose lower for mens",
            reviews: "4/5",
            price: "340",
        },
        {
            image: top,
            title: "off shoulder",
            description: "latest womens off shoulder top",
            reviews: "4.6/5",
            price: "200",
        },
        {
            image: makeup,
            title: "lakme",
            description: "best in market",
            reviews: "4/5",
            price: "1000",
        },
        {
            image: dresses,
            title: "floral",
            description: "beautifull trendy womens dress",
            reviews: "4/5",
            price: "300",
        },
        {
            image: womenjeans,
            title: "levis",
            description: "levis is the name that matters",
            reviews: "4/5",
            price: "2345",
        },
        {
            image: shoe,
            title: "formals",
            description: "best in market",
            reviews: "5/5",
            price: "2500",
        },
    ],
    brands: [
        {
            title: "NIKE",
            image: nike,
            description: "shoes, tee's, sportswears etc",
        },
        {
            title: "ZARA",
            image: zara,
            description: "tops, dresses, bags etc",
        },
        {
            title: "LOUIS VUITTON",
            image: lv,
            description: "bags, perfumes, sunglasses etc",
        },
        {
            title: "LEVI'S",
            image: levis,
            description: "jeans, joggers, shirts etc",
        },
        {
            title: "ADDIDAS",
            image: addias,
            description: "shoes, lowers, sportswears etc",
        },
    ],
};
