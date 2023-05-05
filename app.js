const express = require("express");
const app = express();
const port = process.env.PORT;
const user = require("./routes/userRoute");
const userLogin = require("./routes/loginRoute");
const authorizationMiddleware = require("./middlewares/authenticate");
require("dotenv").config();

app.use("/user", authorizationMiddleware, user);
app.use("/login", userLogin);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
