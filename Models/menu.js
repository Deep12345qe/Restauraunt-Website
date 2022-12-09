//written by Russell
//tested by Russell
//debugged by Russell

const Sequelize = require("sequelize");
const sequelize = require("../database");

const Menu = sequelize.define("food_items", {
    food_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    food_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    food_category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    food_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    food_calories: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    food_description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    food_image: {
        type: Sequelize.STRING,
        allowNull: false,
    },

});

module.exports = Menu;