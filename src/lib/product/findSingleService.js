const { Product } = require('../../model');
const { notFound } = require('../../utils/errors');

/**
 * Find a single product by id
 * @param {object} product
 * @param {string} product.id
 * @returns {object} A product object
 */
const findSingleItem = async ({ id }) => {
  const product = await Product.findById(id);

  if (!product) {
    throw notFound();
  }

  return {
    ...product._doc,
    id: product.id,
  };
};

module.exports = findSingleItem;
