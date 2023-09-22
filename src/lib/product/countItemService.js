const defaults = require('../../config/defaults');
const { Product } = require('../../model');

const count = ({ search = defaults.search }) => {
  const filter = { title: { $regex: search, $options: 'i' } };
  return Product.count(filter);
};

module.exports = count;
