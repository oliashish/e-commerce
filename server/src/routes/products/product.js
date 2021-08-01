const fs = require("fs");
const route = require("express").Router();
const upload = require("../../helper/multerStorage");

const {
    createProduct,
    getAll,
    GetProductById,
    updateProduct,
    deleteProduct,
    GetSearchProduct,
    GetProductByCategory,
} = require("../../controller/product/product.js");

// create new product - only admin access
route.post("/item", upload.single("image"), async (req, res) => {
    const body = req.body;
    const image = fs.readFileSync(req.file.path);
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

// search products
route.get("/search/:searchTerm", async (req, res) => {
    const products = await GetSearchProduct(req.params.searchTerm);
    res.send(products);
});

// get product by category
route.get("/category/:cat", async (req, res) => {
    const products = await GetProductByCategory(req.params.cat);
    res.send(products);
});

// update product - only admin access
// route.put();

// delete product - only admin access
// route.delete();

module.exports = route;
