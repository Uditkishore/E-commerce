const express = require("express");

const connect = require("./configs/db");

const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller");
const { register, login } = require("./controllers/auth.controller");
// This is my crud {register , login}

const app = express();

app.use(express.json());

app.post("/register", register);
app.get("/", (req, res) => {
  res.send({ fakeShop: "working" });
});

app.post("/login", login);

app.use("/users", userController);
app.use("/products", productController);

app.listen(2345, async () => {
  try {
    await connect();
  } catch (err) {
    console.error(err.message);
  }
  console.log("listening on port 2345");
});
