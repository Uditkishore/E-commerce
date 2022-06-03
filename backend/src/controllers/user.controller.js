const express = require("express");
const User = require("../models/user.model");
const crudController = require("./crud.controllers");

const router = express.Router();

router.get("", crudController(User).getAll);

router.patch("/:id", crudController(User).updateOne);

router.delete("/:id", crudController(User).deleteOne);

module.exports = router;
