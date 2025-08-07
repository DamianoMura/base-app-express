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
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the views directory (where templates will be stored)
app.set('views', './views');

//enable json decoding for req.body (body parser)
app.use(express.json());
//importing the errorsHandler middleware
const errorsHandler = require("../middlewares/errorsHandler.js");

//importing the notFound middleware
const notFound = require("../middlewares/notFound.js");


app.get('/',(req,res)=>{
  const data = {
    title: 'Home Page',
    user: 'John Doe'
  };
  
  // Render the 'index' view and pass data to it
  res.render('index', data);
})

app.get('/about',(req,res)=>{
  
  res.send('about us');
  console.log("we are at the about page and we should call in the main layout")
})

app.get('/contact',(req,res)=>{
  res.send('body of the page about<scripts="/js/scripts.js"/>  ');
  console.log("we are at the index and we should call in the main layout")
})

app.use(errorsHandler);
app.use(notFound);


app.listen(port,()=>{
  console.log(`blog is  listening on port ${port}`);
})