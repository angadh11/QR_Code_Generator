const express = require('express');
const bodyParser= require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('routes'));

 app.use('/api',require('./routes/api'));
  



app.listen(3000,function(){
console.log("server started")


});

