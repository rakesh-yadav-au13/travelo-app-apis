"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userSchema = _interopRequireDefault(require("../models/schemas/userSchema"));

function admin(_x, _x2, _x3) {
  return _admin.apply(this, arguments);
}

function _admin() {
  _admin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log("Admin middleware hit");

            if (!req.user.isAdmin) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", next());

          case 4:
            res.status(400).json({
              data: {},
              errors: [{
                value: req.body.email,
                msg: "You can't add any hotel",
                param: "invalid",
                location: "body"
              }],
              message: "Unable to create user"
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _admin.apply(this, arguments);
}

module.exports = admin;
//# sourceMappingURL=admin.js.map