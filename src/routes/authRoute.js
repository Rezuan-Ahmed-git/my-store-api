const router = require('express').Router();
const { controllers: authController } = require('../api/v1/auth');

router.route('/api/v1/register').post(authController.register);

router.route('/api/v1/login').post(authController.login);

module.exports = router;
