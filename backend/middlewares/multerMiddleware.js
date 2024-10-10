const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure the uploads directory exists
if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Function to delete old images
const deleteOldImages = () => {
  const dir = "uploads";
  const retentionPeriod =30* 60 * 1000; // 1 minute in milliseconds

  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error("Could not read uploads directory:", err);
      return;
    }

    const now = Date.now();
    files.forEach(file => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("Could not stat file:", err);
          return;
        }

        // Check if the file is older than the retention period
        if (now - stats.mtimeMs > retentionPeriod) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("Could not delete file:", err);
            } else {
              console.log(`Deleted old file: ${file}`);
            }
          });
        }
      });
    });
  });
};

// Schedule deletion of old images every minute
setInterval(deleteOldImages, 60 * 1000); // Run every minute

module.exports = upload;
