const Creator = require("../models/creatorSchema");
const jwt = require("jsonwebtoken");

module.exports.signIN= async function(req,res){
    try {
      console.log(req.user);
        const creator = await Creator.findOne({ email: req.user.email });
    
        if (!creator || creator.password != req.user.password) {
          return res.json(422, {
            message: "Invalid username or password",
          });
        }
    
        const token = jwt.sign(creator.toJSON(), "cre8share", { expiresIn: "1d" });
        console.log(token);
    
        return res
          .status(200)
          .json({ message: "Token generated successfully", token });
      } catch (err) {
        console.log(err);
        return res.json(500, {
          message: "Internal server error",
        });
      }
}

