const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Handle image conversion
const convertImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const outputFormat = req.body.format || "png";
    const validFormats = ["png", "jpeg", "webp", "tiff", "gif"];

    // Check if the provided format is valid
    if (!validFormats.includes(outputFormat)) {
      return res.status(400).json({
        error:
          "Invalid format provided. Supported formats are png, jpeg, webp, tiff, gif.",
      });
    }

    const tempFilename = `${uuidv4()}-${Date.now()}.${outputFormat}`;
    const tempFilePath = path.join("uploads", tempFilename);

    // Convert the image format using sharp
    await sharp(req.file.path).toFormat(outputFormat).toFile(tempFilePath);

    // Send the converted file for download
    res.download(tempFilePath, (err) => {
      if (err) {
        console.error("Error sending the file:", err.message);
        return res.status(500).json({ error: "Error sending the file" });
      }

      // Clean up the original and converted files
      cleanupFiles(req.file.path, tempFilePath);
    });
  } catch (error) {
    console.error("Error converting the image:", error.message);
    res.status(500).json({ error: "Error converting the image" });
    // Clean up the uploaded file in case of an error
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlink(req.file.path, (unlinkError) => {
        if (unlinkError) {
          console.error(
            "Error cleaning up uploaded file:",
            unlinkError.message
          );
        }
      });
    }
  }
};

// Helper function to clean up files
const cleanupFiles = (originalPath, convertedPath) => {
  try {
    if (fs.existsSync(originalPath)) {
      fs.unlinkSync(originalPath); // Delete original file
    }
  } catch (error) {
    console.error("Error cleaning up original file:", error.message);
  }

  try {
    if (fs.existsSync(convertedPath)) {
      fs.unlinkSync(convertedPath); // Delete converted file
    }
  } catch (error) {
    console.error("Error cleaning up converted file:", error.message);
  }
};

module.exports = {
  convertImage,
};
