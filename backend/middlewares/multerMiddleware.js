const multer = require("multer");
const path = require("path");
const fs = require("fs");

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}


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


const deleteOldImages = () => {
  const dir = "uploads";
  const retentionPeriod =30* 60 * 1000; 

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

setInterval(deleteOldImages, 60 * 1000); 

module.exports = upload;
