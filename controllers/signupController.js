const models = require("../models");

exports.create = async (req, res) => {
  try {
    let email = req.body.email;
    const existEmail = models.User.findOne({ where: { email } });
    if (existEmail) {
      return res.status(409).json({ error: "This user already exist" });
    } else {
      const newUser = await models.User.create(req.body);
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
