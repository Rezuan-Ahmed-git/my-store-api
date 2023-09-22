const router = require('express').Router();
const { controllers: productController } = require('../api/v1/product');

router
  .route('/api/v1/products')
  .post(productController.create)
  .get(productController.findAllItems);

module.exports = router;
