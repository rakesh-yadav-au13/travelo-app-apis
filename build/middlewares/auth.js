"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userSchema = _interopRequireDefault(require("../models/schemas/userSchema"));

var auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var authorization, token, decode, userData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            authorization = req.headers.token;
            console.log(authorization);

            if (authorization) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(401).json({
              data: {},
              error: [],
              message: "Please login!!"
            }));

          case 5:
            token = authorization.split(" ")[1];
            decode = _jsonwebtoken["default"].verify(token, process.env.jwt_secret);
            _context.next = 9;
            return _userSchema["default"].findById(decode.id, {
              password: 0
            });

          case 9:
            userData = _context.sent;

            if (userData) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              data: {},
              errors: [],
              message: "Not a valid user!"
            }));

          case 12:
            req.user = userData;
            next();
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0.message);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = auth;
exports["default"] = _default;
//# sourceMappingURL=auth.js.map