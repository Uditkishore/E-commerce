const express = require("express");

const connect = require("./configs/db");
const cors = require("cors");

const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const cartController = require("./controllers/cart.controller");
const checkoutController = require("./controllers/checkout.controller");
const { register, login } = require("./controllers/auth.controller");
// This is my crud {register , login}

const app = express();
app.use(cors());
app.use(express.json());

app.post("/register", register);
app.get("/", (req, res) => {
  res.send({ fakeShop: "working" });
});

app.post("/login", login);

app.use("/users", userController);
app.use("/products", productController);
app.use("/cart", cartController);
app.use("/checkout", checkoutController);

app.listen(process.env.PORT || 2345, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
