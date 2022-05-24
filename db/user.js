
import * as Sequelize from "sequelize";
export const user = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        },
        salary: {
            type: Sequelize.INTEGER
        },
    });
};
