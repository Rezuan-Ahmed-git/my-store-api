const { Product } = require('../../model');

const create = async ({
  title,
  description,
  price,
  category,
  brand,
  quantity,
  images = [],
  slug,
}) => {
  if (!title || !price || !category || !brand || !description || !quantity) {
    const error = new Error('Invalid parameters');
    error.status = 400;
    throw error;
  }

  const product = new Product({
    title,
    description,
    price,
    category,
    brand,
    quantity,
    images,
    slug,
  });

  await product.save();

  return {
    ...product._doc,
    id: product.id,
  };
};

module.exports = create;
