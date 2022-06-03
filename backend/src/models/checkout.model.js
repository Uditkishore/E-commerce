const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    price: { type: Number, required: true },
    address1: { type: String, required: false },
    country: { type: String, required: true },
    pin: { type: String, required: true },
    town: { type: String, required: true },
    mobile: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("checkout", checkoutSchema);
