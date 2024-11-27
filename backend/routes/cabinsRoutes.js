import express from "express";
import {
  getCabins,
  createCabin,
  updateCabin,
  deleteCabin,
} from "../controllers/cabinController.js";

import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.route("/").get(getCabins).post(upload.single("image"), createCabin);

router
  .route("/:id")
  .put(
    (req, res, next) => {
      console.log("req.file", req.file);
      next();
    },
    upload.single("image"),
    updateCabin
  )
  .delete(deleteCabin);

export default router;
