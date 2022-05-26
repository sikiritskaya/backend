import * as Sequelize from 'sequelize';

export const post = (sequelize) => {
    return sequelize.define('posts', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.INTEGER
        }, 
        userId:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        createdAt:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        updatedAt:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false
        }
        
    });
};

