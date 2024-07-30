const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerMiddleware");
const imageController = require("../controllers/imageController");

// Route to handle image conversion
router.post("/convert", upload.single("image"), imageController.convertImage);

module.exports = router;
