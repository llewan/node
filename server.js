var express           = require('express'),
    app               = express(),
    bodyParser        = require('body-parser'),
    mongoose          = require('mongoose'),
    advicesController = require('./server/controllers/advice-controller');

mongoose.connect('mongodb://localhost:27017/node-test');
app.use(bodyParser());

app.get('/', function (req, res){
  res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/client')); 

// REST API
app.get('/api/advices', advicesController.list );
app.post('/api/advices', advicesController.create );

app.listen(3000, function(){
  console.log('I am listening');
});
