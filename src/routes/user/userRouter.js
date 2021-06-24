import express from "express";
import { getCity, getHotels } from "../../controller/user/cityControler";
import { getUserOrders, postOrder } from "../../controller/user/orderControler";
import auth from "../../middlewares/auth";
import {
  isRequestValidate,
  validatePlaceBooking,
} from "../../utils/sanitizeAndValidate";

const router = express.Router();

router.get("/getcity", getCity);

router.get("/gethotels", getHotels);

router.post("/order", auth, validatePlaceBooking, isRequestValidate, postOrder);

router.get("/bookings", auth, getUserOrders);

export default router;
