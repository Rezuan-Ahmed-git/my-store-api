const create = require('./createService');
const findAll = require('./findAllService');
const count = require('./countProductService');
const findSingle = require('./findSingleService');
const removeItem = require('./removeItemService');

module.exports = {
  create,
  findAll,
  count,
  findSingle,
  removeItem,
};
