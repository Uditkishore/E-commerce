const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    id: { type: Number, required: false },
    rname: { type: String, required: true },
    imgdata: { type: String, required: true },
    address: { type: String, required: true },
    somedata: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: String, required: true },
    qnty: { type: Number, required: true },
    userid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
