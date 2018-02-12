var express = require('express');
var app = express();

var port = process.env.port || 3001;
var mongoose = require('mongoose');

var morgan = require('morgan');

// var configDB = require('./config/database.js');

// mongoose.connect(configDB.url,function(req,res,err){
//   console.log("Connection to mongo DB Successful");
// });

app.use(morgan('dev'));
app.set('view engine','ejs');


app.get('/',function(req,res){
  res.send("Hey it worked Fine");
})

app.listen(port,function(req,res){
  console.log("Server running at port 3001");
})
