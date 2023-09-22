const { Product } = require('../../model');
const { notFound } = require('../../utils/errors');

/**
 * Update properties of an individual Product
 * @param {string} id
 * @param {object} product
 * @param {string} product.title
 * @param {string} product.slug
 * @param {string} product.brand
 * @param {string} product.description
 * @param {number} product.price
 * @param {string} product.category
 * @param {number} product.quantity
 * @param {Array} product.images
 * @returns - Updated Product
 */
const updateItem = async (
  id,
  { title, slug, brand, description, price, category, quantity, images }
) => {
  const product = await Product.findById(id);
  if (!product) {
    throw notFound();
  }

  const payload = {
    title,
    slug,
    brand,
    description,
    price,
    category,
    quantity,
    images,
  };

  Object.keys(payload).forEach((key) => {
    product[key] = payload[key] ?? product[key];
  });
  await product.save();

  return { ...product._doc, id: product.id };
};

module.exports = updateItem;
