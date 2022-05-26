import * as Sequelize from 'sequelize';

export const user = (sequelize) => {
    return sequelize.define('users', {

import * as Sequelize from "sequelize";
export const user = (sequelize, DataTypes) => {
    return sequelize.define("user", {
>>>>>>> 93e059d09f7658831597bbb30da5f0c5f81d51d1
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        createdAt:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        updatedAt:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }
    });
};

