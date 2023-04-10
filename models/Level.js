const Sequelize = require("sequelize");
const connection = require("../database/database");

const Level = connection.define('levels', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    status:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Level;