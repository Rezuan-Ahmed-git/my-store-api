const { productServices } = require('../../../../lib');

const removeItem = async (req, res, next) => {
  const { id } = req.params;
  try {
    await productServices.removeItem(id);

    res.status(204).end();
  } catch (e) {
    next(e);
  }
};

module.exports = removeItem;
