const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./database/dbConnection");
const auth = require("./routes/auth/authRoute");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(
    session({
        key: "accessToken",
        secret:
            process.env.JWT_ACCESS_TOKEN_KEY ||
            "hshkbfauebkwuegb8293t92832bfweufwefbwjfweiouf",
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 60 * 24,
        },
    })
);
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../client/build")));

app.use("/api/authenticate", auth);

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("../../client/build"));
// }
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
