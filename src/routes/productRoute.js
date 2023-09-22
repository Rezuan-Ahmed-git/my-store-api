const router = require('express').Router();
const { controllers: productController } = require('../api/v1/product');

router.get('/api/v1/products', productController.create);

module.exports = router;
