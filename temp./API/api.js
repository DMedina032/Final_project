import { Http2ServerRequest } from "http2";

var mars = "mars";
var condition = "weather";
var require = "stars";


fetch('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
.then(res => res.json())
.then(data => {
    console.log("DATA:",data);
    const{} = mars.rover;
    marsIMG =`<img src="https://images.app.goo.gl/Y8vzqpiqZoZ1WyqC7"`.headers
    /// innerHTML ?
});







fetch('https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
. then(response => package.json())
.then(data => {
    console.log(data)
})
.catch(err => '' )

// POST call
var url = 'https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0';
var headers = {
    "Content-type": "package/json",
    "Client_id": "",
    "age": ""
}

var data = {
    "Name": "",
    "age": ""
}

fetch(url, {method: 'POST', headers: headers, body: data})
.then((res) => {
    return res.json()
})
.then((json) => {
    console.log(json);
});

// Response 
fetch('https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
.then(res => {
    res.text()
    res.json()
    // to  catch errors 
    res.status
    res.statusText
    res.redirected
    res.ok
    res.type

    res.headers.get('Content-type')
})

fetch('https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0')
.then(reportStatus)

function checkStatus (res){
    if(res.status >= 200 && res.status < 300){
        return res 
    } else {
        let err = new Error(res.statusText)
        err.response = res 
        throw err
    }
}

// Asynchronous request 
// const url = "https: //api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";

const get_data = async url => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch(error){
        console.log(error);
    }
};
var reportStatus;
getData(url);

getApi(Http2ServerRequest);




// ..............................
// var express = require('express');
// var app = express();
// var PORT = 3000;
// const path = require('path');

// serve static files
app.use(express.static("public"));

app.get('./', function(req, res){
  res.send('Hello world');
});

app.set("view engine", "pug")
app.set("views" , 'views');

var server = app.listen(3000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('app listening at http://localhost:3000', host, port);
});


app.get("/", (req, res, next) => {
    let url = "localhost:3000"
    res.render("index", {url:url});
    });
    
  
  app.get("/contact", (req, res, next) => {
    let url = "localhost:3000"
    res.render("contact", {url:url});
    });
    
    app.get("/mars", (req, res, next) => {
      let url = "localhost:3000"
      res.render("mars", {url:url});
    })



    // ..........
    const personTemplate = document.querySelector("#person");
const peopleContainer = document.querySelector("#people");

async function getApi() {
  const req = await fetch("https://reqres.in/api/users?page=2");
  const resp = await req.json();

  for (const person of resp.data) {
    let clone = document.importNode(personTemplate.content, true);
    clone.querySelector(".name").textContent = person.first_name;
    clone.querySelector(".surname").textContent = person.last_name;
    clone.querySelector(".image").src = person.avatar;
    peopleContainer.appendChild(clone);
  }
}

getApi();


// const peopleContainer = document.querySelector("#people");
const person = (name, surname, image) => `
<div>
  <p class="name">${name}</p>
  <p class="surname">${surname}</p>
  <img src="${image}" alt="" class="image">
</div>
`;

async function getApi() {
  const req = await fetch("https://reqres.in/api/users?page=2");
  const resp = await req.json();

  let htmlString = "";

  for (const {first_name, last_name, avatar} of resp.data) {
    htmlString += person(first_name, last_name, avatar);
  }
  // This should probably be an html element that gets appended
  // instead of just shoving strings in willy-nilly, but anyway:
  peopleContainer.innerHTML = htmlString;
}

    