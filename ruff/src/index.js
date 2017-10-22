'use strict';
var accountSid = 'ACe7363dba0d7e208982460906bd449764';
var authToken = '2117648120fcb02f44493d02a73a5efe';
var client = require('twilio')


$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
	console.log("Starting");
	
	$('#pn532').on('tag', function(tag){
		var parcelID = tag.uid.toString('hex');
		console.log('The arrived parcel is', tag.uid.toString('hex'));
		// POST method with JSON  to Twilio server
		client.message
			.create({
				to: "+18058860369",
				from: "+18053015117",
				body: "Your UPS package with tracking number " + parcelID + " from Pennsylvania has arrived. Please use the following link to provide signature to confirm it: ",
				media_url: "https://cops.usdoj.gov/html/dispatch/06-2015/images/doorstep-packages.png",
			});
	});
});
