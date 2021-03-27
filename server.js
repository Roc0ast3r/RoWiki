var express = require('express');
var app = express();

app.use(express.static('public'));

/** PAGES **/
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('*', function(req, res){
  res.sendFile(__dirname + '/views/404.html');
});

var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});