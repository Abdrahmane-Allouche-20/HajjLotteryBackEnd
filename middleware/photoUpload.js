const multer = require('multer');

// Use memory storage for cloud uploads (no local disk writes)
const storage = multer.memoryStorage();

const photoUpload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb({ message: 'Unsupported file format' }, false);
    }
  },
  limits: { fileSize: 1024 * 1024 }, // 1MB limit
});

module.exports = photoUpload;