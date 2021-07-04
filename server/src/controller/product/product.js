// require product model
const { Product } = require("../../models");

const createProduct = async (body, image) => {
    const { cat_id, desc_id, name, price, total_available, desc } = body;
    try {
        const product = await Product.create({
            cat_id,
            desc_id,
            name,
            image,
            desc,
            price,
            total_available,
        });
        return product;
    } catch (err) {
        throw err;
    }
};
const getAllProducts = () => {};
const GetProductById = () => {};
const updateProduct = () => {};
const deleteProduct = () => {};

module.exports = {
    createProduct,
    getAllProducts,
    GetProductById,
    updateProduct,
    deleteProduct,
};
