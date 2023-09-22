const slugify = require('slugify');
const { productServices } = require('../../../../lib');

const updateItem = async (req, res, next) => {
  const { id } = req.params;
  const { title, brand, description, price, category, quantity, images } =
    req.body;
  let slug = req.body.slug;

  try {
    if (title) {
      slug = slugify(req.body.title);
    }

    const product = await productServices.updateItem(id, {
      title,
      slug,
      brand,
      description,
      price,
      category,
      quantity,
      images,
    });

    const response = {
      code: 200,
      message: 'Product updated successfully',
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

module.exports = updateItem;
