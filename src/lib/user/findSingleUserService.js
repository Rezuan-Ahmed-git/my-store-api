const User = require('../../model/User');
const { notFound } = require('../../utils/errors');

/**
 * Find a single user by id
 * @param {object} user
 * @param {string} user.id
 * @returns - A user object
 */
const findSingleUserService = async ({ id }) => {
  const user = await User.findById(id);

  if (!user) {
    throw notFound();
  }

  return {
    ...user._doc,
    id: user.id,
  };
};

module.exports = findSingleUserService;
