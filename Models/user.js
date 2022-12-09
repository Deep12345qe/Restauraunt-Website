//Author = Russell


const Sequelize = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define("user", {
   username: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    create_time: {
        type: Sequelize.TIME,
        allowNull: false,
    },
    UserID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,

    },
});

module.exports = User;