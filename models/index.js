'use strict';
export const HOST = "localhost";
export const USER = "postgres";
export const PASSWORD = "Kristina";
export const DB = "newdb";
export const dialect = "postgres";
export const pool = {
  max: 5,
  min: 0,
  acquire: 30000,
  idle: 10000
};

import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: dialect,
    operatorsAliases: false,

    pool: {
        max: pool.max,
        min: pool.min,
        acquire: pool.acquire,
        idle: pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.company = require('./post.model.js')(sequelize, Sequelize);
db.company = require('./user.js')(sequelize, Sequelize);

module.exports = db;