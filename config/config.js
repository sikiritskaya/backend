/* {
  "development": {
    "username":"postgres",
    "password": "Kristina",
    "database": "newdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "Kristina",
    "database": "newdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "Kristina",
    "database": "newdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
} */

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Kristina",
  DB: "newdb",
  dialect: "postgres",
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
};