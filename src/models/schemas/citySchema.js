import mongoose from "mongoose";

const citySchems = mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("city", citySchems);
