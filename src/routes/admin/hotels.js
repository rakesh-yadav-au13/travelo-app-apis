import express from "express";
import auth from "../../middlewares/auth";
import admin from "../../middlewares/admin";
import { addHotel, getYourHotel } from "../../controller/admin/hotelsControler";
import { getBookings } from "../../controller/admin/orderControler";
import {
  isRequestValidate,
  validateAddHotel,
} from "../../utils/sanitizeAndValidate";

const router = express.Router();

router.post(
  "/addhotel",
  auth,
  admin,
  validateAddHotel,
  isRequestValidate,
  addHotel
);

router.get("/hotelbookings", auth, admin, getBookings);

router.get("/yourhotel", auth, admin, getYourHotel);

export default router;
