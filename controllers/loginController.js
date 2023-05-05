const models = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.findOne = async (req, res) => {
  const { email, password } = req.body;
  // console.log("thisss", req.body);
  try {
    const user = await models.User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      } else {
        const token = jwt.sign({ userId: user.id }, process.env.SECRECT_KEY, {
          expiresIn: process.env.TOKEN_EXPIRY,
        });
        res.json({ token });
      }
    }
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
