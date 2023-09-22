const { productServices } = require('../../../../lib');
const defaults = require('../../../../config/defaults');
const generateQueryString = require('../../../../utils/generateQueryString');

const findAllItems = async (req, res, next) => {
  const page = req.query.page || defaults.page;
  const limit = req.query.limit || defaults.limit;
  const sortType = req.query.sort_type || defaults.sortType;
  const sortBy = req.query.sort_by || defaults.sortBy;
  const search = req.query.search || defaults.search;

  try {
    const products = await productServices.findAll({
      page,
      limit,
      sortType,
      sortBy,
      search,
    });

    //pagination
    const totalProducts = await productServices.count({ search });
    const totalPage = Math.ceil(totalProducts / limit);

    const pagination = {
      page,
      limit,
      totalPage,
      totalProducts,
    };

    if (page < totalPage) {
      pagination.next = page + 1;
    }

    if (page > 1) {
      pagination.prev = page - 1;
    }

    //HATEOAS Links

    const links = {
      self: req.url,
    };

    if (pagination.next) {
      const query = generateQueryString({ ...req.query, page: page + 1 });
      links.next = `${req.path}?${query}`;
    }
    if (pagination.prev) {
      const query = generateQueryString({ ...req.query, page: page - 1 });
      links.prev = `${req.path}?${query}`;
    }

    res.status(200).json({
      products,
      pagination,
      links,
    });
  } catch (e) {
    next(e);
  }
};

module.exports = findAllItems;
