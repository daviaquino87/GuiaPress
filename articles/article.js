const sequelize = require("sequelize");
const connection = require("../database/database");
//creating categories table in the bank
const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull:false,
    },slug:{
        type: Sequelize.STRING,
        allowNull:false,
    },body:{
        type: Sequelize.TEXT,
        allowNull:false
    }
})

module.exports = Article;