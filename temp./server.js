const express = require("express");
const app = express();

    app.use(express.static("public"));
    
    app.get('./', function(req, res){
      res.send('Hello world');
    });
    
    app.set("view engine", "pug")
    app.set("views" , 'views');
    
    var server = app.listen(5501, function(){
        var host = server.address().address;
        var port = server.address().port;
        console.log('app listening at http://localhost:5501', host, port);
    });
    
    
    app.get("/", (req, res, next) => {
        let url = "localhost:5501"
        res.render("index", {url:url});
        });
        
      
      app.get("/contact", (req, res, next) => {
        let url = "localhost:5501"
        res.render("contact", {url:url});
        });
        
        app.get("/mars", (req, res, next) => {
          let url = "localhost:5501"
          res.render("mars", {url:url});
        })
