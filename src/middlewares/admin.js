const admin = async (req, res, next) => {
  try {
    if (req.user.isAdmin) {
      return next();
    }
    res.status(400).json({
      data: {},
      errors: [
        {
          value: req.body.email,
          msg: "You are not a Hotel Owner",
          param: "invalid",
          location: "body",
        },
      ],
      message: "Unable to create user",
    });
  } catch (err) {
    console.log(err.message);
  }
};

export default admin;
