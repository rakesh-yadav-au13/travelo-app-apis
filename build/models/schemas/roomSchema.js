"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var RoomSchems = _mongoose["default"].Schema({
  checkIn: {
    type: Date
  },
  checkOut: {
    type: Date
  },
  status: {
    type: String,
    required: true,
    "default": "available"
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("room", RoomSchems);

exports["default"] = _default;
//# sourceMappingURL=roomSchema.js.map