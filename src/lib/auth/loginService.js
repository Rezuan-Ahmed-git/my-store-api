const { User } = require('../../model');
const { badRequest } = require('../../utils/errors');
const { hashMatched } = require('../../utils/hashing');

/**
 * Login a User with email and password
 * @param {object} user
 * @param {string} user.email
 * @param {string} user.password
 * @returns - Logged in user object
 */
const loginService = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw badRequest('Invalid Credentials');
  }

  const matched = await hashMatched(password, user.password);
  if (!matched) {
    throw badRequest('Invalid Credentials');
  }

  return { ...user._doc };
};

module.exports = loginService;
