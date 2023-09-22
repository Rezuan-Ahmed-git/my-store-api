const router = require('express').Router();
const { controllers: productController } = require('../api/v1/product');
const { authMiddleware, isAdmin } = require('../middleware/auth');

router
  .route('/api/v1/products')
  .post(authMiddleware, isAdmin, productController.create)
  .get(productController.findAllItems);

router
  .route('/api/v1/products/:id')
  .get(productController.findSingleItem)
  .delete(authMiddleware, isAdmin, productController.removeItem)
  .patch(authMiddleware, isAdmin, productController.updateItem);

module.exports = router;
