import citySchems from "../../models/schemas/citySchema";
import hotelSchema from "../../models/schemas/hotelSchema";

export const addHotel = async (req, res) => {
  try {
    const {
      city,
      hotelName,
      address,
      price,
      hotelImg,
      totalRooms,
      rating,
      facility,
    } = req.body;
    let cityName = await citySchems.findOne({ city: city });
    if (!cityName) {
      cityName = new citySchems({
        city: city,
      });
      await cityName.save();
    }

    let hotel = await hotelSchema.findOne({ hotelName: hotelName });
    if (hotel) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: hotelName,
            msg: "Hotel already exist",
            param: "invalid",
            location: "body",
          },
        ],
        message: "Hotel already exist",
      });
    }

    hotel = new hotelSchema({
      adminId: req.user._id,
      city,
      hotelName,
      address,
      price,
      hotelImg,
      totalRooms,
      rating,
      facility,
    });

    await hotel.save();
    res.status(200).json({
      data: hotel,
      errors: [],
      message: "Hotel added successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getYourHotel = async (req, res) => {
  try {
    const hotel = await hotelSchema.findOne({ adminId: req.user._id });
    res.status(200).json({
      data: hotel,
      errors: [],
      message: "Order fetch successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
