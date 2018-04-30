const express = require('express');
const axios = require('axios');
const port = 8080;
const app = express();


let num = Math.floor(Math.random() * 10000);
const version = process.env.VERSION;

app.get('/', (request, response) => {
  console.log(`From server ${num} Received request for URL: ${request.url} version ${version}`)
  response.writeHead(200);
  response.end(`Hello World! Venkatesh And Deepthi from server ${num} version ${version}`);
  
})

app.get('/health', (request, response) => {
  console.log(`Health check instance ${num} Received request for URL: ${request.url} version ${version}`)
  response.writeHead(200);
  response.end(`I am healthy! from server ${num} version ${version}`);
  
})


app.listen(port, (err) => {
  console.log("started server");
  if(err)
    return console.log(`something happened on startup with text` );

});
