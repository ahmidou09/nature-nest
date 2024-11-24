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

router.route("/:id").put(updateCabin).delete(deleteCabin);

export default router;
