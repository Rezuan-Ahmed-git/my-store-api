const router = require('express').Router();
const { controllers: userControllers } = require('../api/v1/user');
const { authMiddleware, isAdmin } = require('../middleware/auth');

router
  .route('/api/v1/users')
  .get(authMiddleware, isAdmin, userControllers.findAllUsers);

router
  .route('/api/v1/users/:id')
  .get(authMiddleware, isAdmin, userControllers.findSingleUser)
  .delete(authMiddleware, isAdmin, userControllers.removeSingleUser);

module.exports = router;
