var express = require('express');
var request = require('request');
var apigee = require('apigee-access');

var app = express();

app.post('/',
                    function(request, response) {

	callToBackend(request, response, function(err, data) {

		if (!err){

			response.setHeader('Content-Type', 'application/json');

			response.send(data);
		}
		else {

			response.status(500).send(err);
			return;
		}
	});

});

var callToBackend = function(mainreq, mainres, callback) {
    var receivedMessage = apigee.getVariable(mainreq,'request.content');
	var options = {
		url : "https://www.floristone.com/api/rest/flowershop/placeorder",
		body : receivedMessage,

		"headers" : {
			"content-type" : "application/json;charset=utf-8",
			"authorization" : "Basic NDE4ODQyOjB0RU5Fdw=="
		}

	};

	var req = request.post(options, function(err, res, body) {
console.log(body);
		if (!err && res.statusCode == '200')
			return callback(false, body);

		return callback(err, null);

	});

}

app.listen((process.env.PORT || 9001), function() {
	console.log("server Listening");
});
