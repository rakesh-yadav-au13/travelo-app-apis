"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _roomSchema = _interopRequireDefault(require("./roomSchema"));

var HotelSchems = _mongoose["default"].Schema({
  adminId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  hotelName: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    trim: true
  },
  totalRooms: {
    type: String,
    required: true
  },
  hotelImg: {
    type: Array,
    required: true
  },
  facility: {
    type: Array,
    required: true
  }
}, {
  timestamps: true
});

var _default = _mongoose["default"].model("hotel", HotelSchems);

exports["default"] = _default;
//# sourceMappingURL=hotelSchema.js.map