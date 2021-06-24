import mongoose from "mongoose";

const OrderSchems = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    hotelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hotel",
    },
    checkIn: {
      type: Date,
      required: true,
      trim: true,
    },
    checkOut: {
      type: Date,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
    },
    totalPerson: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("order", OrderSchems);
