import jwt from "jsonwebtoken";
import userSchema from "../models/schemas/userSchema";

const auth = async (req, res, next) => {
  try {
    const authorization = req.headers.token;
    if (!authorization) {
      return res.status(400).json({
        data: {},
        error: [
          {
            value: req.body.email,
            msg: "Please login first",
            param: "email",
            location: "body",
          },
        ],
        message: "Please login!!",
      });
    }

    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.jwt_secret);
    const userData = await userSchema.findById(decode.id, {
      password: 0,
    });
    if (!userData) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: req.body.email,
            msg: "Not a valid user!",
            param: "invalid",
            location: "body",
          },
        ],
        message: "Not a valid user!",
      });
    }
    req.user = userData;
    next();
  } catch (error) {
    console.log(error.message);
  }
};

export default auth;
