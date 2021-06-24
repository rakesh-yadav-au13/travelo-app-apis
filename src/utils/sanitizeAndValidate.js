import { check, validationResult } from "express-validator";

export const validateSignup = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name cannot be empty")
    .isLength({ max: 15 })
    .withMessage("Max length is 15 characters."),

  check("email")
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Not a valid email"),

  check("phone")
    .not()
    .isEmpty()
    .withMessage("Phone cannot be empty")
    .isLength({ min: 10 })
    .withMessage("Phone no. must contain 10 digites"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 6 })
    .withMessage("Password must have 6 characters"),
];

export const validateLogin = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Email cannot be empty")
    .isEmail()
    .withMessage("Not a valid email"),

  check("password")
    .not()
    .isEmpty()
    .withMessage("Password cannot be empty")
    .isLength({ min: 6 })
    .withMessage("Password must have 6 characters"),
];

export const validateAddHotel = [
  check("hotelName").not().isEmpty().withMessage("Hotel Name cannot be empty"),
  check("address").not().isEmpty().withMessage("Address cannot be empty"),
  check("city").not().isEmpty().withMessage("City cannot be empty"),
  check("price").not().isEmpty().withMessage("Price cannot be empty"),
  check("totalRooms")
    .not()
    .isEmpty()
    .withMessage("Enter totel available romms "),
  check("rating").not().isEmpty().withMessage("Rating cannot be empty"),
  check("hotelImg")
    .not()
    .isEmpty()
    .withMessage("Please Uplode your hotel images"),
  check("facility")
    .not()
    .isEmpty()
    .withMessage("Select your hotels's facilities"),
];

export const validatePlaceBooking = [
  check("checkIn").not().isEmpty().withMessage("Check In date cannot be empty"),
  check("checkOut")
    .not()
    .isEmpty()
    .withMessage("Check Out date cannot be empty"),
  check("name").not().isEmpty().withMessage("Name cannot be empty"),
  check("phone").not().isEmpty().withMessage("Phone cannot be empty"),
];

export const isRequestValidate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
