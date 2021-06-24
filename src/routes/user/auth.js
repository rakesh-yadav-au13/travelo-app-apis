import express from "express";
import { Signup, Login } from "../../controller/user/authControler";
import {
  validateSignup,
  isRequestValidate,
  validateLogin,
} from "../../utils/sanitizeAndValidate";

const router = express.Router();

router.post("/signup", validateSignup, isRequestValidate, Signup);

router.post("/login", validateLogin, isRequestValidate, Login);

export default router;
