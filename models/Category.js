const Sequelize = require("sequelize");
const connection = require("../database/database");
const Level = require("./Level")

const Category = connection.define('categories', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Level.hasMany(Category);
Category.belongsTo(Level);


module.exports = Category;