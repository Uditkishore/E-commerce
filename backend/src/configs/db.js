const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://udit:udit@cluster0.n9ur0.mongodb.net/fakeshop?retryWrites=true&w=majority"
  );
};
