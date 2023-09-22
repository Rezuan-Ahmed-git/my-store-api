const { generateHash } = require('../../utils/hashing');
const User = require('../../model/User');

/**
 * Register a User
 * @param {object} user
 * @param {string} user.email
 * @param {string} user.firstName
 * @param {string} user.lastName
 * @param {string} user.mobile
 * @param {string} user.address
 * @param {string} user.password
 * @returns - Registered User object
 */
const registerService = async ({
  email,
  firstName,
  lastName,
  mobile,
  address,
  password,
}) => {
  const payload = { email, firstName, lastName, mobile, address, password };
  const findUser = await User.findOne({ email });

  if (!findUser) {
    //hash password
    payload.password = await generateHash(payload.password);
    //create new user
    const newUser = await User.create(payload);
    return newUser;
  } else {
    throw new Error('User Already Exists');
  }
};

module.exports = registerService;
