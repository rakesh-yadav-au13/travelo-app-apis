import orderSchema from "../../models/schemas/orderSchema";
import hotelSchema from "../../models/schemas/hotelSchema";

export const getBookings = async (req, res) => {
  try {
    const hotel = await hotelSchema.findOne({ adminId: req.user._id });
    const order = await orderSchema
      .find({ hotelId: hotel._id }, null, {
        sort: { createdAt: -1 },
      })
      .populate("hotelId");

    res.status(200).json({
      data: order,
      errors: [],
      message: "Order fetch successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
