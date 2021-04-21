const express = require("express");
const cors = require("cors");

const route = require("./routes/routes");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use("/test", route);

app.listen(PORT, () => {
    console.log(`App running on port : ${PORT}`);
});
