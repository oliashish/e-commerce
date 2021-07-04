const route = require("express").Router();
const upload = require("../../helper/multerStorage");
const { Create } = require("../../controller/product/category");

route.post("/create", upload.none(), async (req, res) => {
    const { name, type } = req.body;
    console.log(req.body);
    const result = await Create(name, type);
    res.send(result);
});
route.get("/category", (req, res) => {});
route.get("/category/:id", (req, res) => {});
route.delete("/category/:id", (req, res) => {});
route.put("/category/:id", (req, res) => {});

module.exports = route;
