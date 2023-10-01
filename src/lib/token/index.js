const jwt = require('jsonwebtoken');

/**
 * Generate token for authentication by JWT
 * @param {string} id
 * @returns - Access Token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateToken };
