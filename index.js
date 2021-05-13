const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

const Article = require("./articles/article");
const Category = require("./categories/category");


//view engine 
app.set('view engine','ejs');

//Static
app.use(express.static("Public"));

//Body passer
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

//database connection verification
connection.authenticate().then(()=>{
    console.log("Conexão feita com sucesso");
}).catch((error)=>{
    console.log(error);
})

//passing the routes created in the controller
app.use("/", categoriesController);
app.use("/", articlesController);


//initial route
app.get("/" , (req, res) =>{
    Article.findAll({
        order:[
            ['id','DESC']
        ]
    }).then(articles => {
        res.render("index" , {articles: articles})
    })
})

app.get("/:slug" , (req,res) => {
    var slug = req.params.slug;
    Article.findOne({
        where: { 
            slug: slug 
        }
    }).then( article => {
        if(article != undefined){
            res.render("article", {article:article})
        }else{
            res.redirect("/")
        }
    }).catch( err => {
        res.redirect("/");
        console.log(err);
    })
})

//opening door
app.listen(8080, ()=>{
    console.log("servidor rodando")
})