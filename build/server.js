"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongo = _interopRequireDefault(require("./models/configs/mongo"));

var _auth = _interopRequireDefault(require("./routes/user/auth"));

var _userRouter = _interopRequireDefault(require("./routes/user/userRouter"));

var _hotels = _interopRequireDefault(require("./routes/admin/hotels"));

require("dotenv").config();

(0, _mongo["default"])();
var app = (0, _express["default"])();
var Port = process.env.PORT || 5001;
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.get("/health", function (req, res) {
  res.send("Health ok...");
}); // user related Routes

// user relaed Apis
app.use("/api", _userRouter["default"]); // Commen Routes

app.use("/api", _auth["default"]); // Admin related apis

app.use("/api", _hotels["default"]);
app.listen(Port, function (err, req, res) {
  if (err) {
    console.log(err.message);
  }

  console.log("app running on http://localhost:".concat(Port));
});
//# sourceMappingURL=server.js.map