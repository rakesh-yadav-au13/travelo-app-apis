"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postOrder = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _orderSchema = _interopRequireDefault(require("../../models/schemas/orderSchema"));

var postOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, checkIn, checkOut, name, userId, phone, totalPerson, hotelId, checkInDate, order;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, checkIn = _req$body.checkIn, checkOut = _req$body.checkOut, name = _req$body.name, userId = _req$body.userId, phone = _req$body.phone, totalPerson = _req$body.totalPerson, hotelId = _req$body.hotelId;
            checkInDate = new Date(checkIn);
            _context.next = 5;
            return _orderSchema["default"].find({
              hotelId: hotelId,
              $and: [{
                checkIn: {
                  $lte: checkInDate
                }
              }, {
                checkOut: {
                  $not: {
                    $lte: checkInDate
                  }
                }
              }]
            });

          case 5:
            order = _context.sent;
            console.log(order);

            if (order.length == 5) {
              console.log("Hotel full");
            }

            order = new _orderSchema["default"]({
              checkIn: checkIn,
              checkOut: checkOut,
              name: name,
              hotelId: hotelId,
              userId: userId,
              phone: phone,
              totalPerson: totalPerson
            });
            _context.next = 11;
            return order.save();

          case 11:
            res.status(200).json({
              data: order,
              errors: [],
              message: "Order Place successfully"
            });
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function postOrder(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postOrder = postOrder;
//# sourceMappingURL=orderControler.js.map