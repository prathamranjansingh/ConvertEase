const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");

const uploadDir = path.join(__dirname, "../uploads");

const resizeImage = async (req, res) => {
  try {
    const { width, height } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const widthValue = parseInt(width, 10);
    const heightValue = parseInt(height, 10);
    if (isNaN(widthValue) || isNaN(heightValue) || widthValue <= 0 || heightValue <= 0) {
      return res.status(400).json({ error: "Invalid width or height values. Must be positive integers." });
    }

    const fileExtension = path.extname(req.file.originalname);
    const fileName = `${uuidv4()}${fileExtension}`;
    const outputPath = path.join(uploadDir, fileName);

    // Resize the image using sharp
    await sharp(req.file.path)
      .resize(widthValue, heightValue) // Resize to specified width and height
      .toFile(outputPath);

    // Send the resized file for download
    res.download(outputPath, (err) => {
      if (err) {
        console.error("Error sending the file", err);
      }

      // Clean up the original and resized files
      try {
        fs.unlinkSync(req.file.path); // Delete original file
        fs.unlinkSync(outputPath); // Delete resized file
      } catch (cleanupError) {
        console.error("Error cleaning up files", cleanupError);
      }
    });
  } catch (error) {
    console.error("Error resizing the image", error);
    res.status(500).json({ error: "Error resizing the image" });
  }
};

module.exports = {
  resizeImage,
};
