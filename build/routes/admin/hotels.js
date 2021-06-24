"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = _interopRequireDefault(require("../../middlewares/auth"));

var _admin = _interopRequireDefault(require("../../middlewares/admin"));

var _hotelsControler = require("../../controller/admin/hotelsControler");

var _sanitizeAndValidate = require("../../utils/sanitizeAndValidate");

var router = _express["default"].Router();

router.post("/addhotel", _auth["default"], _admin["default"], _hotelsControler.addHotel);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=hotels.js.map