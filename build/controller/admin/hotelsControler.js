"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHotel = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _citySchema = _interopRequireDefault(require("../../models/schemas/citySchema"));

var _roomSchema = _interopRequireDefault(require("../../models/schemas/roomSchema"));

var _hotelSchema = _interopRequireDefault(require("../../models/schemas/hotelSchema"));

var addHotel = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, city, hotelName, address, price, hotelImg, totalRooms, rating, facility, cityName, hotel;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, city = _req$body.city, hotelName = _req$body.hotelName, address = _req$body.address, price = _req$body.price, hotelImg = _req$body.hotelImg, totalRooms = _req$body.totalRooms, rating = _req$body.rating, facility = _req$body.facility;
            _context.next = 4;
            return _citySchema["default"].findOne({
              city: city
            });

          case 4:
            cityName = _context.sent;

            if (cityName) {
              _context.next = 9;
              break;
            }

            cityName = new _citySchema["default"]({
              city: city
            });
            _context.next = 9;
            return cityName.save();

          case 9:
            _context.next = 11;
            return _hotelSchema["default"].findOne({
              hotelName: hotelName
            });

          case 11:
            hotel = _context.sent;

            if (!hotel) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: hotelName,
                msg: "Hotel already exist",
                param: "invalid",
                location: "body"
              }],
              message: "Hotel already exist"
            }));

          case 14:
            hotel = new _hotelSchema["default"]({
              adminId: req.user._id,
              city: city,
              hotelName: hotelName,
              address: address,
              price: price,
              hotelImg: hotelImg,
              totalRooms: totalRooms,
              rating: rating,
              facility: facility
            });
            _context.next = 17;
            return hotel.save();

          case 17:
            res.status(200).json({
              data: hotel,
              errors: [],
              message: "Hotel added successfully"
            });
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 20]]);
  }));

  return function addHotel(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addHotel = addHotel;
//# sourceMappingURL=hotelsControler.js.map