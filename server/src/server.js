const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./models");

const route = require("./routes/routes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// app.use("/test", route);
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("../../client/build"));
// }
// app.use("/*", (req, res) => {
//     res.send(path.join(__dirname, "..", "..", "client", "build", "index.html"));
// });

db.sequelize
    .sync()
    .then(console.log("db connected successfully"))
    .catch((err) => {
        console.log(error);
    });

app.listen(PORT);
