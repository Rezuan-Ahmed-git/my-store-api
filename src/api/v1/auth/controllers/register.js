const { authServices } = require('../../../../lib');
const { generateToken } = require('../../../../lib/token');

const register = async (req, res, next) => {
  const { email, firstName, lastName, mobile, address, password } = req.body;

  try {
    const registeredUser = await authServices.register({
      email,
      firstName,
      lastName,
      mobile,
      address,
      password,
    });

    const response = {
      code: 201,
      message: 'Registered Successfully',
      data: {
        access_token: generateToken(registeredUser?._id),
      },
      links: {
        self: '/auth/register',
        next: '/auth/login',
      },
    };

    res.status(201).json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = register;
