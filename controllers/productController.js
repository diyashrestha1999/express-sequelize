const models = require("../models");
exports.findAll = async (req, res) => {
  try {
    const productList = await models.Product.findAll();
    res.status(200).json(productList);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};

exports.create = async (req, res) => {
  try {
    const newData = await models.Product.create(req.body);
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
};
