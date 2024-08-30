// models/User.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// This section is create table in seq
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {
        //   isAlpha: true
        // }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
});

module.exports = User;
