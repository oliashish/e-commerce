import Axios from "axios";

export const getAllProduct = async () => {
    try {
        const { data } = await Axios.get("/api/products/items");

        return data;
    } catch (err) {
        throw err;
    }
};

export const getProductById = async (id) => {
    try {
        const { data } = await Axios.get(`/api/products/items/${id}`);
        return data;
    } catch (err) {
        throw err;
    }
};
