const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("./Category");


const Phrase = connection.define('phrases', {
    portuguese:{
        type: Sequelize.STRING,
        allowNull: false
    },
    english:{
        type: Sequelize.STRING,
        allowNull: false
    },
    pronunciation:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.hasMany(Phrase);
Phrase.belongsTo(Category);

module.exports = Phrase;