const { userServices } = require('../../../../lib');

const removeSingleUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    await userServices.removeUser(id);

    res.status(204).json({ message: 'Successfully deleted' });
  } catch (e) {
    next(e);
  }
};

module.exports = removeSingleUser;
