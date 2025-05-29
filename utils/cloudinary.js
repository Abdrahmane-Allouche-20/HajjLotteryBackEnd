const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            resource_type: 'auto',
        });
        return result;
    } catch (error) {
        throw error;
    }
};

// Add this function for buffer uploads (memory storage)
const uploadImageBuffer = (buffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        }).end(buffer);
    });
};

const removeImage = async (publicId) => {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = { uploadImage, uploadImageBuffer, removeImage };