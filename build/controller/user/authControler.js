"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Profile = exports.Login = exports.Signup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _userSchema = _interopRequireDefault(require("../../models/schemas/userSchema"));

var _hashPass = require("../../utils/hashPass");

var Signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, email, name, phone, password, isAdmin, user, hashPassword;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, name = _req$body.name, phone = _req$body.phone, password = _req$body.password, isAdmin = _req$body.isAdmin;
            _context.next = 4;
            return _userSchema["default"].find({
              email: email
            });

          case 4:
            user = _context.sent;

            if (!(user.length > 0)) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: req.body.email,
                msg: "User already exists.",
                param: "invalid",
                location: "body"
              }],
              message: "Unable to create user"
            }));

          case 7:
            _context.next = 9;
            return (0, _hashPass.hash)(password, 10);

          case 9:
            hashPassword = _context.sent;
            user = new _userSchema["default"]({
              name: name,
              email: email,
              phone: phone,
              isAdmin: isAdmin,
              password: hashPassword
            });
            _context.next = 13;
            return user.save();

          case 13:
            res.status(200).json({
              data: {},
              errors: [],
              message: "Signed Up successfully!!"
            });
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

  return function Signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.Signup = Signup;

var Login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, email, password, user, matchPassword, token;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return _userSchema["default"].findOne({
              email: email
            });

          case 4:
            user = _context2.sent;

            if (user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: email,
                msg: "Invalid credentials",
                param: "invalid",
                location: "body"
              }],
              message: "Invalid credentials"
            }));

          case 7:
            matchPassword = _bcrypt["default"].compareSync(password, user.password);

            if (matchPassword) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              data: {},
              errors: [{
                value: password,
                msg: "Invalid credentials",
                param: "invalid",
                location: "body"
              }],
              message: "Invalid credentials"
            }));

          case 12:
            token = _jsonwebtoken["default"].sign({
              id: user._id
            }, process.env.jwt_secret, {
              expiresIn: "1d"
            });
            res.status(200).json({
              data: {
                token: token,
                user: user
              },
              errors: [],
              message: "Login successfully!"
            });

          case 14:
            _context2.next = 19;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0.message);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 16]]);
  }));

  return function Login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.Login = Login;

var Profile = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              res.status(200).json({
                data: req.user,
                errors: [],
                message: "Fetched data form user"
              });
            } catch (err) {
              console.log(err.message);
            }

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function Profile(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.Profile = Profile;
//# sourceMappingURL=authControler.js.map