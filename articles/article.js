const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/category")

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
Category.hasMany(Article); //a category have many articles
Article.belongsTo(Category); //an article belongs to a category

module.exports = Article;