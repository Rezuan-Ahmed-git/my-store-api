const { authServices } = require('../../../../lib');

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
    res.status(201).json(registeredUser);
  } catch (e) {
    next(e);
  }
};

module.exports = register;
