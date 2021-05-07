const express = require("express");
const cors = require("cors");
const path = require("path");
const database = require("./database/dbConnection");

const route = require("./routes/routes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../client/build")));
app.use(database);
app.use("/", route);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../../client/build"));
}
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
