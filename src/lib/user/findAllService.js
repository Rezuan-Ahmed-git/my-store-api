const User = require('../../model/User');

const findAllService = async () => {
  const users = await User.find();

  return users.map((user) => ({
    ...user._doc,
    id: user.id,
  }));
};

module.exports = findAllService;
