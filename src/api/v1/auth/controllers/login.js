const { authServices } = require('../../../../lib');
const { generateToken } = require('../../../../lib/token');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const loggedInUser = await authServices.login({ email, password });

    res.status(200).json({
      _id: loggedInUser?._id,
      firstName: loggedInUser?.firstName,
      lastName: loggedInUser?.lastName,
      email: loggedInUser?.email,
      mobile: loggedInUser?.mobile,
      token: generateToken(loggedInUser?._id),
    });
  } catch (e) {
    next(e);
  }
};

module.exports = login;
