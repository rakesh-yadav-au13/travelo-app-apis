"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cityControler = require("../../controller/user/cityControler");

var _orderControler = require("../../controller/user/orderControler");

var _auth = _interopRequireDefault(require("../../middlewares/auth"));

var router = _express["default"].Router();

router.get("/getcity", _cityControler.getCity);
router.get("/gethotels", _cityControler.getHotels);
router.post("/order", _orderControler.postOrder);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=userRouter.js.map