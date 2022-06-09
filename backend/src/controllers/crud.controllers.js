const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);

    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getAll = (model) => async (req, res) => {
  try {
    let sortBy = req.query || null;
    let filterBy = req.query || null;
    let products = await model.find().lean().exec();

    // sorting

    if (sortBy.price) {
      if (sortBy.price === "asc") {
        products = await model.aggregate([{ $sort: { price: 1 } }]);
      } else if (sortBy.price === "desc") {
        products = await model.aggregate([{ $sort: { price: -1 } }]);
      }
    } else if (sortBy.rating) {
      if (sortBy.rating === "asc") {
        products = await model.aggregate([{ $sort: { rating: 1 } }]);
      } else if (sortBy.rating === "desc") {
        products = await model.aggregate([{ $sort: { rating: -1 } }]);
      }
    } else if (filterBy.category) {
      products = products.filter((user) => user.category === sortBy.category);
    } else if (filterBy.category == "both") {
      products = products;
    }

    res.status(200).json({
      status: "success",
      product: products,
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id).lean().exec();

    return res.send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const updateOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const deleteOne = (model) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id);

    return res.send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = (model) => {
  return {
    post: post(model),
    getAll: getAll(model),
    getOne: getOne(model),
    updateOne: updateOne(model),
    deleteOne: deleteOne(model),
  };
};
