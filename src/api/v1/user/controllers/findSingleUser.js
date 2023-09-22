const { userServices } = require('../../../../lib');

const findSingleUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userServices.findSingle({ id });
    res.json(user);
  } catch (e) {
    next(e);
  }
};

module.exports = findSingleUser;
