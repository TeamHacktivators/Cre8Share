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
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    if (password != user.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // If the credentials are valid, generate a JWT token
    const token = jwt.sign({ id: user._id }, 'cre8share');
    res.json({ token });
  } catch (error) {
    console.error("Sign-in failed:", error);
    res.status(500).json({ error: "Sign-in failed" });
  }
};
