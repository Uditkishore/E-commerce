const express = require("express");

const Product = require("../models/product.model");

const authenticate = require("../middlewares/authenticate");

const crudController = require("./crud.controllers");

const router = express.Router();

router.post("", authenticate, async (req, res) => {
  try {
    req.body.user_id = req.user._id;
    const product = await Product.create(req.body);

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("/", crudController(Product).getAll);

router.patch("/:id", crudController(Product).updateOne);

router.delete("/:id", crudController(Product).deleteOne);
module.exports = router;
