import express from "express";
import {
  getGuests,
  createGuest,
  updateGuest,
  deleteGuest,
} from "../controllers/guestController.js";

const router = express.Router();

router.route("/").get(getGuests).post(createGuest);
router.route("/:id").put(updateGuest).delete(deleteGuest);

export default router;
