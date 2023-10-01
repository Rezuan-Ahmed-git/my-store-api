const router = require('express').Router();
const { controllers: authController } = require('../api/v1/auth');

router.route('/api/v1/auth/register').post(authController.register);

router.route('/api/v1/auth/login').post(authController.login);

module.exports = router;
