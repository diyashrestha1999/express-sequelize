const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");

router.use(express.json());
router.route("/").post(loginController.findOne);
module.exports = router;
