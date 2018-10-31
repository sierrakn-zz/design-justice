var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


// routes
var index = require('./routes/index');
var language = require('./routes/language');
var map = require('./routes/map');

app.get('/', index.view);
app.get('/english', language.viewEnglish);
app.get('/spanish', language.viewSpanish);
app.get('/arabic', language.viewArabic);
app.get('/vietnamese', language.viewVietnamese);
app.get('/chinese', language.viewChinese);
app.get('/samoan', language.viewSamoan);
app.get('/filipino', language.viewFilipino);
app.get('/farsi', language.viewFarsi);

app.get('/map', map.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});