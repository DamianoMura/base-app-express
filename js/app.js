//importing express
const express = require("express");
//calling the function that creates the process
const app = express();
//setting up port
const port = 3000;

//importing axios 
const axios = require("axios");
//lets enable static  assets
app.use(express.static('public/'));
//enable json decoding for req.body (body parser)
app.use(express.json());
//importing the errorsHandler middleware
const errorsHandler = require("../middlewares/errorsHandler.js");
//importing the notFound middleware
const notFound = require("../middlewares/notFound.js");
//importing the pageCreator middleware

app.get('/',(req,res)=>{
  res.send('<h1>welcome to my blog</h1>');
  console.log("we are at the index and we should call in the main layout")
})

app.get('/about',(req,res)=>{
  
  res.send('about us');
  console.log("we are at the about page and we should call in the main layout")
})

app.get('/contact',(req,res)=>{
  res.send('here you can contact us ');
  console.log("we are at the index and we should call in the main layout")
})

app.use(errorsHandler);
app.use(notFound);


app.listen(port,()=>{
  console.log(`blog is  listening on port ${port}`);
})