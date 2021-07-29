import Axios from "axios";

export const getAllProduct = async () => {
    try {
        const { data } = await Axios.get("/api/products/items");

        const ProductItems = data.map((item) => {
            let imageParsed;
            const unicode = Buffer.from(item.image.data, "base64");
            const imagebase64 = unicode.toString("base64");
            imageParsed = "data:image/jpeg;base64," + imagebase64;
            item.image = imageParsed;
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
        return data;
    } catch (err) {
        throw err;
    }
};
