import mongoose from "mongoose";

const HotelSchems = mongoose.Schema(
  {
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    hotelName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
    totalRooms: {
      type: String,
      required: true,
    },
    hotelImg: {
      type: Array,
      required: true,
    },
    facility: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("hotel", HotelSchems);
