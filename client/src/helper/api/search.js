import Axios from "axios";

const searchProduct = async (productName) => {
    const { data } = await Axios.get(`/api/products/search/${productName}`);
};

export default searchProduct;
