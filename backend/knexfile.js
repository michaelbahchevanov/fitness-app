require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DB,
      port: process.env.PORT,
    },
  },
  migrations: {
    directory: './db/migrations',
  },
};
