const defaults = require('../../config/defaults');
const { Product } = require('../../model');

/**
 * Find and filter all Products
 * @param {object} query
 * @param {number} query.page
 * @param {number} query.limit
 * @param {string} query.sortType
 * @param {string} query.sortBy
 * @param {string} query.search
 * @returns {Array} - Get all products
 */
const findAll = async ({
  page = defaults.page,
  limit = defaults.limit,
  sortType = defaults.sortType,
  sortBy = defaults.sortBy,
  search = defaults.search,
}) => {
  const sortStr = `${sortType === 'dsc' ? '-' : ''}${sortBy}`;

  const searchFilter = { title: { $regex: search, $options: 'i' } };

  const products = await Product.find(searchFilter)
    .sort(sortStr)
    .skip(page * limit - limit)
    .limit(limit);

  return products.map((product) => ({
    ...product._doc,
    id: product.id,
  }));
};

module.exports = findAll;
