"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHotels = exports.getCity = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _citySchema = _interopRequireDefault(require("../../models/schemas/citySchema"));

var _hotelSchema = _interopRequireDefault(require("../../models/schemas/hotelSchema"));

var getCity = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var cityDetails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _citySchema["default"].find();

          case 3:
            cityDetails = _context.sent;

            if (cityDetails) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: "",
                msg: "City not available",
                param: "city",
                location: "body"
              }],
              message: "City not available"
            }));

          case 6:
            res.status(200).json({
              data: cityDetails,
              errors: [],
              message: "City data fatched successfully"
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getCity(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCity = getCity;

var getHotels = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var hotelDetails;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _hotelSchema["default"].find();

          case 3:
            hotelDetails = _context2.sent;

            if (hotelDetails) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: "",
                msg: "Hotel not available",
                param: "Hotel",
                location: "body"
              }],
              message: "Hotel not available"
            }));

          case 6:
            res.status(200).json({
              data: hotelDetails,
              errors: [],
              message: "Hotel data fatched successfully"
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.message);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getHotels(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getHotels = getHotels;
//# sourceMappingURL=cityControler.js.map