const mongoose = require('mongoose');

let connectionURL = process.env.DB_CONNECTION_URL;

const connectDB = async () => {
  await mongoose.connect(connectionURL);
  console.log('Database is connected');
};

module.exports = connectDB;
