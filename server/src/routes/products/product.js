const route = require("express").Router();
const upload = require("../../helper/multerStorage");

const {
    createProduct,
    getAllProducts,
    GetProductById,
    updateProduct,
    deleteProduct,
} = require("../../controller/product/product.js");

// create new product - only admin access
route.post("/createproduct", upload.single("image"), async (req, res) => {
    const body = req.body;
    const file = req.file;
});

// get all products
// route.get();

// // get product by id
// route.get();

// // update product - only admin access
// route.put();
// // delete product - only admin access
// route.delete();

module.exports = route;
