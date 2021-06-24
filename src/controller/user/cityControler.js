import citySchems from "../../models/schemas/citySchema";
import hotelSchems from "../../models/schemas/hotelSchema";

export const getCity = async (req, res) => {
  try {
    const cityDetails = await citySchems.find();
    if (!cityDetails) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: "",
            msg: "City not available",
            param: "city",
            location: "body",
          },
        ],
        message: "City not available",
      });
    }
    res.status(200).json({
      data: cityDetails,
      errors: [],
      message: "City data fatched successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getHotels = async (req, res) => {
  try {
    const hotelDetails = await hotelSchems.find();
    if (!hotelDetails) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: "",
            msg: "Hotel not available",
            param: "Hotel",
            location: "body",
          },
        ],
        message: "Hotel not available",
      });
    }
    res.status(200).json({
      data: hotelDetails,
      errors: [],
      message: "Hotel data fatched successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
