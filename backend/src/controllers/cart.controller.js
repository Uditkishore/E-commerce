const express = require("express");

const Cart = require("../models/cart.module");

const crudController = require("./crud.controllers");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    return res.send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", crudController(Cart).getAll);

router.patch("/:id", crudController(Cart).updateOne);

router.delete("/:id", crudController(Cart).deleteOne);
module.exports = router;
