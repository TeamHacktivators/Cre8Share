const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports.signUP = async function (req, res) {
  if (req.body.password !== req.body.confirm_password) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      // Create the user if it doesn't exist
      await User.create(req.body);
      return res.json(200, {
        message: "User created successfully",
      });
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.signIN = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign(user.toJSON(), "cre8share", { expiresIn: "1d" });

    return res
      .status(200)
      .json({ message: "Token generated successfully", token });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: "Internal server error",
    });
  }
};
