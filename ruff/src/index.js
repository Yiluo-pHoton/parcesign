'use strict';

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
	$('#pn532').on('tag', function(tag){
		var parcelID = tag.uid.toString('hex');
		console.log('The arrived parcel is ', tag.uid.toString('hex'));
		// POST method with JSON  to Twilio server
	}
});

$.end(function () {
    $('#led-r').turnOff();
});
