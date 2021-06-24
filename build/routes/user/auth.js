"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../../middlewares/auth"));

var _authControler = require("../../controller/user/authControler");

var _sanitizeAndValidate = require("../../utils/sanitizeAndValidate");

var router = _express["default"].Router();

router.post("/signup", _sanitizeAndValidate.validateSignup, _sanitizeAndValidate.isRequestValidate, _authControler.Signup);
router.post("/login", _sanitizeAndValidate.validateLogin, _sanitizeAndValidate.isRequestValidate, _authControler.Login);
router.get("/profile", _auth["default"], _authControler.Profile);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map