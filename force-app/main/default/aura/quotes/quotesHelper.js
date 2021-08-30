({
	doInit : function(component) {
		let bandName = component.get('v.bandName');
        let bandQuote;
        if(bandName == 'BTS'){
            bandQuote = "\"Don't be trapped in someone else's dream.\"";
        } else if(bandName == 'Blackpink'){
            bandQuote = "\"All eyes on me when I step in the room.\"";
        } else {
            bandQuote = "\"Put away all other thoughts, do whatever you want\"";
        }
        component.set('v.quote', bandQuote);
	}
})