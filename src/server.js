import express from "express";
import cors from "cors";
require("dotenv").config();

import mongoInit from "./models/configs/mongo";
mongoInit();

const app = express();
const Port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Health ok...");
});

// user related Routes
import AuthRouter from "./routes/user/auth";
import UserRoutes from "./routes/user/userRouter";

// Admin related Routes
import AdminAddHotel from "./routes/admin/hotels";

// user relaed Apis
app.use("/api", UserRoutes);

// Commen Routes
app.use("/api", AuthRouter);

// Admin related apis
app.use("/api", AdminAddHotel);

app.listen(Port, (err, req, res) => {
  if (err) {
    console.log(err.message);
  }
  console.log(`app running on http://localhost:${Port}`);
});
