const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

// Handle image conversion
const convertImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const outputFormat = req.body.format || "png";
    const outputFilename = `${Date.now()}.${outputFormat}`;
    const outputPath = path.join("uploads", outputFilename);

    // Convert the image format using sharp
    await sharp(req.file.path).toFormat(outputFormat).toFile(outputPath);

    // Send the converted file for download
    res.download(outputPath, (err) => {
      if (err) {
        console.error("Error sending the file", err);
      }

      // Clean up the original and converted files
      try {
        fs.unlinkSync(req.file.path); // Delete original file
        fs.unlinkSync(outputPath); // Delete converted file
      } catch (cleanupError) {
        console.error("Error cleaning up files", cleanupError);
      }
    });
  } catch (error) {
    console.error("Error converting the image", error);
    res.status(500).json({ error: "Error converting the image" });
  }
};

module.exports = {
  convertImage,
};
