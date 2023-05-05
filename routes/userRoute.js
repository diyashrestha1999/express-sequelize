const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.use(express.json());
router.route("/").get(userController.findAll).post(userController.create);
module.exports = router;
