var ngrok = require('ngrok');

ngrok.connect(3000, function(err, url){
	console.log('Connected');
});