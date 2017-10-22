var accountSid = "ACe7363dba0d7e208982460906bd449764";
var authToken = "2117648120fcb02f44493d02a73a5efe";

var client = require('twilio')(accountSid, authToken);

client.messages.create({
	to: "+18058860369",
	from: "+18053015117",
	body: "Your UPS package with tracking number ca911705 from Pennsylvania has arrived. Please use the following link to provide signature to confirm it: ",
	mediaUrl: "https://cops.usdoj.gov/html/dispatch/06-2015/images/doorstep-packages.png",
}, function(err, message) {
	if(err) {
		console.log(err);
	} else {
	console.log(message.sid);
	}
});
