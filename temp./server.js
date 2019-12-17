const express = require("express");
const app = express();

    app.use(express.static("public"));
    
    app.get('./', function(req, res){
      res.send('Hello world');
    });
    
    app.set("view engine", "pug")
    app.set("views" , 'views');
    
app.listen(5502);
    
    
    app.get("/", (req, res, next) => {
        let URL = "localhost:5502"
        res.render("index", {url:URL});
        });
        
      
      app.get("/contact", (req, res, next) => {
        let url = "localhost:5502"
        res.render("contact", {url:url});
        });
        
        app.get("/mars", (req, res, next) => {
          let url = "localhost:5502"
          res.render("mars", {url:url});
        })




        // Things for the API
        // var marsIndex = require('./routes/index');
        // var nasaApi = require('./routes/nasa');
        // var marsData = 

        // app.use('/nasa', nasaApi)
        // app.use('/', marsIndex)
