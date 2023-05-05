const express = require("express");
const app = express();
const port = process.env.PORT;
const user = require("./routes/userRoute");
const userLogin = require("./routes/loginRoute");
const userSignup = require("./routes/signupRoute");
const product = require("./routes/productRoute");
const authorizationMiddleware = require("./middlewares/authenticate");
require("dotenv").config();
app.use(express.json());

app.use("/user", authorizationMiddleware, user);
app.use("/login", userLogin);
app.use("/signup", userSignup);
app.use("/product", authorizationMiddleware, product);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
