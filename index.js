const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs")
const connection = require("./database/database");
//view engine 
app.set('view engine','ejs');


//Static
app.use(express.static("Public"));


//database connection verification
connection.authenticate().then(()=>{
    console.log("Conexão feita com sucesso");
}).catch((error)=>{
    console.log(error);
})

//Body passer
app.use(bodyParser.urlencoded({extend: false}));
app.use(bodyParser.json());

//initial route
app.get("/" , (req, res) =>{
    res.render("index")
})

//opening door
app.listen(8080, ()=>{
    console.log("servidor rodando")
})