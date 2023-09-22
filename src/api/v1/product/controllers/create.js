const slugify = require('slugify');
const { productServices } = require('../../../../lib');

const create = async (req, res, next) => {
  const { title, description, price, category, brand, quantity, images } =
    req.body;

  //generate slug
  let slug = req.body.slug;
  if (title) {
    slug = slugify(req.body.title);
    console.log('I am created', slug);
  }

  try {
    const product = await productServices.create({
      title,
      description,
      price,
      category,
      brand,
      quantity,
      images,
      slug,
    });
    res.status(201).json(product);
  } catch (e) {
    next(e);
  }
};

module.exports = create;
