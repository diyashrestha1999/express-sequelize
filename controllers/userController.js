const models = require("../models");
const userModel = models.User;

exports.create = async (req, res) => {
  try {
    const newData = await userModel.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
exports.findAll = async (req, res) => {
  // Retrieve all <ModelName>s from the database
  try {
    const newData = await userModel.findAll();
    res.status(200).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
