import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";

// Configure Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "cabin-images",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});
const upload = multer({ storage });

export default upload;
