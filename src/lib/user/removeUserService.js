const { User } = require('../../model');
const { notFound } = require('../../utils/errors');

/**
 * Delete a user by id
 * @param {string} id
 * @returns - Deleted User
 */
const remove = async (id) => {
  const findUser = await User.findById(id);

  if (!findUser) {
    throw notFound();
  }
  return User.findByIdAndDelete(id);
};

module.exports = remove;
