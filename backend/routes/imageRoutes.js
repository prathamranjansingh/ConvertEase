const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerMiddleware");
const imageController = require("../controllers/imageController");
const compressImageController = require("../controllers/compressImageController");

// Route to handle image conversion
router.post("/convert", upload.single("image"), imageController.convertImage);

// Route to handle image compression
router.post(
  "/compress",
  upload.single("image"),
  compressImageController.compressImage
);

module.exports = router;
