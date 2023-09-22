const { productServices } = require('../../../../lib');

const findSingleItem = async (req, res, next) => {
  const id = req.params.id;

  try {
    const product = await productServices.findSingle({ id });

    const response = {
      data: product,
      links: {
        self: `/products/${product.id}`,
      },
    };
    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = findSingleItem;
