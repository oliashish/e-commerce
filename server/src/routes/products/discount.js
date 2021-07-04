const route = require("express").Router();
const { Create } = require("../../controller/product/discount");
const upload = require("../../helper/multerStorage");

route.post("/create", upload.none(), async (req, res) => {
    const { name, desc, percent, active } = req.body;
    const result = await Create(name, desc, percent, active);
    res.send(result);
});
route.get("/category", (req, res) => {});
route.get("/category/:id", (req, res) => {});
route.delete("/category/:id", (req, res) => {});
route.put("/category/:id", (req, res) => {});

module.exports = route;
