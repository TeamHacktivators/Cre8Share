const User = require("../../../models/userSchema");

exports.getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-_id -password");
    console.log(user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
