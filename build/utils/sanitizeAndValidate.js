"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isRequestValidate = exports.validateLogin = exports.validateSignup = void 0;

var _expressValidator = require("express-validator");

var validateSignup = [(0, _expressValidator.check)("name").not().isEmpty().withMessage("Name cannot be empty").isLength({
  max: 15
}).withMessage("Max length is 15 characters."), (0, _expressValidator.check)("email").not().isEmpty().withMessage("Email cannot be empty").isEmail().withMessage("Not a valid email"), (0, _expressValidator.check)("phone").not().isEmpty().withMessage("Phone cannot be empty").isLength({
  min: 10
}).withMessage("Phone no. must contain 10 digites"), (0, _expressValidator.check)("password").not().isEmpty().withMessage("Password cannot be empty").isLength({
  min: 6
}).withMessage("Password must have 6 characters")];
exports.validateSignup = validateSignup;
var validateLogin = [(0, _expressValidator.check)("email").not().isEmpty().withMessage("Email cannot be empty").isEmail().withMessage("Not a valid email"), (0, _expressValidator.check)("password").not().isEmpty().withMessage("Password cannot be empty").isLength({
  min: 6
}).withMessage("Password must have 6 characters")];
exports.validateLogin = validateLogin;

var isRequestValidate = function isRequestValidate(req, res, next) {
  var errors = (0, _expressValidator.validationResult)(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  next();
};

exports.isRequestValidate = isRequestValidate;
//# sourceMappingURL=sanitizeAndValidate.js.map