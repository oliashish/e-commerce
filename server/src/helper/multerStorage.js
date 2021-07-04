const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads/product"));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now().toString());
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
