"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var citySchems = _mongoose["default"].Schema({
  city: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("city", citySchems);

exports["default"] = _default;
//# sourceMappingURL=citySchema.js.map