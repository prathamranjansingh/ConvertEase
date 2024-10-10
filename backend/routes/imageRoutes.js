const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerMiddleware");
const imageController = require("../controllers/imageController");
const compressImageController = require("../controllers/compressImageController");
const resizeImageController = require("../controllers/resizeImageController");

router.post("/convert", upload.single("image"), imageController.convertImage);
router.post("/resize", upload.single("image"), resizeImageController.resizeImage);


router.post(
  "/compress",
  upload.single("image"),
  compressImageController.compressImage
);

module.exports = router;
