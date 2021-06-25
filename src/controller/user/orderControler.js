import orderSchema from "../../models/schemas/orderSchema";

export const postOrder = async (req, res) => {
  try {
    const {
      checkIn,
      checkOut,
      name,
      userId,
      phone,
      totalPerson,
      hotelId,
      totalRooms,
    } = req.body;
    let checkInDate = new Date(checkIn);
    let order = await orderSchema.find({
      hotelId: hotelId,
      $and: [
        { checkIn: { $lte: checkInDate } },
        { checkOut: { $gt: checkInDate } },
      ],
    });

    if (order.length == totalRooms) {
      return res.status(400).json({
        data: [],
        errors: [
          {
            value: "",
            msg: "Rooms not available",
            param: "",
            location: "body",
          },
        ],
        message: "Order Place successfully",
      });
    }
    order = new orderSchema({
      checkIn,
      checkOut,
      name,
      hotelId,
      userId,
      phone,
      totalPerson,
    });
    await order.save();
    res.status(200).json({
      data: order,
      errors: [],
      message: "Order Place successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const order = await orderSchema
      .find({ userId: req.user._id }, null, {
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
