const { Product } = require('../../model');

/**
 * Create a new product
 * @param {object} product
 * @param {string} product.title
 * @param {string} product.description
 * @param {number} product.price
 * @param {string} product.category
 * @param {string} product.brand
 * @param {number} product.quantity
 * @param {Array} product.images
 * @param {string} product.slug
 * @returns {object} A newly created Product object
 */
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
