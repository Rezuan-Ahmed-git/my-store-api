const { userServices } = require('../../../../lib');

const findAllUsers = async (req, res, next) => {
  try {
    const users = await userServices.findAll();
    res.json(users);
  } catch (e) {
    next(e);
  }
};

module.exports = findAllUsers;
