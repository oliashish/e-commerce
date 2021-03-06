import Axios from "axios";
import image_to_base64 from "../base64/image_to_base64";

export const getAllProduct = async () => {
    try {
        const { data } = await Axios.get("/api/products/items");
        const ProductItems = data.map((item) => {
            const imagebase64 = image_to_base64(item.image);
            item.image = imagebase64;
            return { ...item };
        });

        if (ProductItems) {
            return ProductItems;
        }
        return data;
    } catch (err) {
        throw err;
    }
};

export const getProductById = async (id) => {
    try {
        const { data } = await Axios.get(`/api/products/items/${id}`);
        const ProductById = data;
        const imagebase64 = image_to_base64(ProductById.image);
        ProductById.image = imagebase64;
        return ProductById;
    } catch (err) {
        throw err;
    }
};

export const getProductByCategory = async (cat) => {
    try {
        const { data } = await Axios.get(`/api/products/category/${cat}`);
        const Products = data;

        const ProductsByCategory = Products.map((product) => {
            const imagebase64 = image_to_base64(product.image);
            product.image = imagebase64;
            return product;
        });
        if (ProductsByCategory) {
           
            return ProductsByCategory;
        }
        return Products;
    } catch (err) {
        throw err;
    }
};
