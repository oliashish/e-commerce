const route = require("express").Router();
const upload = require("../../helper/multerStorage");

const {
    createProduct,
    getAll,
    GetProductById,
    updateProduct,
    deleteProduct,
} = require("../../controller/product/product.js");

// create new product - only admin access
route.post("/item", upload.single("image"), async (req, res) => {
    const body = req.body;
    const image = req.file;

    const product = await createProduct(body, image);
    res.send(product);
});

// get all products
route.get("/items", async (req, res) => {
    const products = await getAll();
    res.send(products);
});

// get product by Id
route.get("/items/:id", async (req, res) => {
    const product = await GetProductById(req.params.id);
    res.send(product);
});

// update product - only admin access
// route.put();

// delete product - only admin access
// route.delete();

module.exports = route;
