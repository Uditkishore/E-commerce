const express = require("express");

const Checkout = require("../models/checkout.model");

const crudController = require("./crud.controllers");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const checkout = await Checkout.create(req.body);

    return res.send(checkout);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", crudController(Checkout).getAll);

router.patch("/:id", crudController(Checkout).updateOne);

router.delete("/:id", crudController(Checkout).deleteOne);
module.exports = router;
