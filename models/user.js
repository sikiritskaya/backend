'use strict';
import { Sequelize, DataTypes, Model } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
}, {
    sequelize,
    modelName: 'User',
});

export default User;

/* import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
    class User extends Model {
        //static associate(models) {
        //define association here
        //}
    }
    User.init({
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
}; */

