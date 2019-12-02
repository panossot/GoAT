declare const require;


var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');


var app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(bodyParser.text());




function redirectRouterLessonUnmatched(req,res) {
    res.sendFile("index.html", { root: './src/goat' });
}

app.use(redirectRouterLessonUnmatched);


var server = app.listen(8080, function() {
    console.log("Server running at http://localhost:" + server.address().port);
});

