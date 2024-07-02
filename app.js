console.log('running');

var express = require('express');      

var app = express();

app.use(express.static(__dirname + '/public')); 

var contador = 0;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
  console.log(`Foi realizado uma nova requisição ${++contador}`);
});

app.listen(3000);

console.log('Listening on port 3000');

