const express = require("express");

const Product = require("../models/product.model");

const crudController = require("./crud.controllers");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", crudController(Product).getAll);

router.get("/:id", crudController(Product).getOne);

router.patch("/:id", crudController(Product).updateOne);

router.delete("/:id", crudController(Product).deleteOne);
module.exports = router;
