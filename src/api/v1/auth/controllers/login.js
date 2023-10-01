const { authServices } = require('../../../../lib');
const { generateToken } = require('../../../../lib/token');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const loggedInUser = await authServices.login({ email, password });

    const response = {
      code: 200,
      message: 'Login Successfull',
      data: {
        access_token: generateToken(loggedInUser?._id),
      },
      links: {
        self: '/auth/login',
      },
    };

    res.status(200).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = login;
