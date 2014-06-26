var express = require('express')
var app = express();
var bodyParser = require('body-parser');
 
// express config
app.use(bodyParser());
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/.tmp'));
app.set('views', __dirname + '/app/views');

// routes
app.get('/', function(req, res) {
    res.render('index.ejs'); 
});

// start server
var server = app.listen(process.env.PORT || 9000, function() {
    console.log('Express server listening on port %s', server.address().port);
});
