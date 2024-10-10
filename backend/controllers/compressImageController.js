const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");

const uploadDir = path.join(__dirname, "../uploads");

const compressImage = async (req, res) => {
  try {
    const { quality } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const qualityValue = parseInt(quality, 10);
    if (isNaN(qualityValue) || qualityValue < 1 || qualityValue > 100) {
      return res
        .status(400)
        .json({ error: "Invalid quality value. Must be between 1 and 100." });
    }

    const fileExtension = path.extname(req.file.originalname);
    const fileName = `${uuidv4()}${fileExtension}`;
    const outputPath = path.join(uploadDir, fileName);

  
    await sharp(req.file.path)
      .jpeg({ quality: qualityValue })
      .toFile(outputPath);


    res.download(outputPath, (err) => {
      if (err) {
        console.error("Error sending the file", err);
      }

      try {
        fs.unlinkSync(req.file.path); 
        fs.unlinkSync(outputPath); 
      } catch (cleanupError) {
        console.error("Error cleaning up files", cleanupError);
      }
    });
  } catch (error) {
    console.error("Error compressing the image", error);
    res.status(500).json({ error: "Error compressing the image" });
  }
};

module.exports = {
  compressImage,
};
