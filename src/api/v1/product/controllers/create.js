const { productServices } = require('../../../../lib');

const create = async (req, res, next) => {
  const { title, description, price, category, brand, quantity, images } =
    req.body;

  try {
    const product = await productServices.create({
      title,
      description,
      price,
      category,
      brand,
      quantity,
      images,
    });
    res.status(201).json('Success');
  } catch (e) {
    next(e);
  }
};

module.exports = create;
