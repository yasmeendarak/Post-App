import { useMongoDB } from "./controllers";

const { Sequelize } = require('sequelize');
const mongoose = require('mongoose');

const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MONGODB_URI } = process.env;

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
});

  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err.message);
      process.exit(1);
    });

  async function syncDatabase() {
    try {
      await sequelize.sync();
      console.log('Connected to MySQL');
    } catch (error) {
      console.error('Error Disconnected Database:', error);
    }
  }

  syncDatabase();

  if (useMongoDB) {
    console.log('Using MongoDB');
  } else {
    console.log('Using MySQL');
  }
  
module.exports = {
  sequelize,
  mongoose,
  
};
