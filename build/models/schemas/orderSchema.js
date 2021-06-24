"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var OrderSchems = _mongoose["default"].Schema({
  userId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "user"
  },
  hotelId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "hotel"
  },
  checkIn: {
    type: Date,
    required: true,
    trim: true
  },
  checkOut: {
    type: Date,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true
  },
  totalPerson: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("order", OrderSchems);

exports["default"] = _default;
//# sourceMappingURL=orderSchema.js.map