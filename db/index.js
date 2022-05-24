
import { Sequelize } from 'sequelize';
import { post } from './post.js';
import { user } from './user.js';
import { dbConfig } from "../config/dbConfig.js";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.post = post(sequelize, Sequelize);
db.user = user(sequelize, Sequelize);

export default db;