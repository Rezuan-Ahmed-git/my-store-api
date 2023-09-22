const authenticate = (req, _res, next) => {
  req.user = {
    id: '64e47f9b81f82de192028d59',
    firstName: 'Rezuan',
    lastName: 'Ahmed',
    email: 'rezuan@gmail.com',
    password: '123456',
    role: 'admin',
  };
  next();
};

module.exports = authenticate;
