import express from "express";
import {
  getCabins,
  createCabin,
  updateCabin,
  deleteCabin,
} from "../controllers/cabinController.js";

const router = express.Router();

router.route("/").get(getCabins).post(createCabin);
router.route("/:id").put(updateCabin).delete(deleteCabin);

export default router;
