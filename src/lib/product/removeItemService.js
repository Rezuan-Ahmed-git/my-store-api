const { Product } = require('../../model');
const { notFound } = require('../../utils/errors');

/**
 * Delete a single product by id
 * @param {string} id
 * @returns
 */
const removeItem = async (id) => {
  const product = await Product.findById(id);

  if (!product) {
    throw notFound();
  }

  return Product.findByIdAndDelete(id);
};

module.exports = removeItem;
