const router = require('express').Router();
const { controllers: userControllers } = require('../api/v1/user');

router.route('/api/v1/users').get(userControllers.findAllUsers);

router.route('/api/v1/users/:id').get(userControllers.findSingleUser);

module.exports = router;
