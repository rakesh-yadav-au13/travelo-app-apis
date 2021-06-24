import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userSchema from "../../models/schemas/userSchema";
import { hash } from "../../utils/hashPass";

export const Signup = async (req, res) => {
  try {
    const { email, name, phone, password, isAdmin } = req.body;
    let user = await userSchema.find({ email: email });
    if (user.length > 0) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: req.body.email,
            msg: "User already exists.",
            param: "invalid",
            location: "body",
          },
        ],
        message: "Unable to create user",
      });
    }

    const hashPassword = await hash(password, 10);
    user = new userSchema({
      name,
      email,
      phone,
      isAdmin,
      password: hashPassword,
    });
    await user.save();
    res.status(200).json({
      data: {},
      errors: [],
      message: "Signed Up successfully!!",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: email,
            msg: "Invalid credentials",
            param: "invalid",
            location: "body",
          },
        ],
        message: "Invalid credentials",
      });
    }

    const matchPassword = bcrypt.compareSync(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({
        data: {},
        errors: [
          {
            value: password,
            msg: "Invalid credentials",
            param: "invalid",
            location: "body",
          },
        ],
        message: "Invalid credentials",
      });
    } else {
      const token = jwt.sign({ id: user._id }, process.env.jwt_secret, {
        expiresIn: "1d",
      });
      res.status(200).json({
        data: { token, user },
        errors: [],
        message: "Login successfully!",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
