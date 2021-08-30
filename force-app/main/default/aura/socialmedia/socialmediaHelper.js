({
	doInit : function(component) {
		let bandName = component.get('v.bandName');
        let youtube;
        let instagram;
        let spotify;
        if(bandName == 'BTS'){
            youtube = "https://www.youtube.com/user/BANGTANTV";
            instagram = "https://www.instagram.com/bts.bighitofficial";
            spotify = "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX";
        } else if(bandName == 'Blackpink'){
            youtube = "https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A";
            instagram = "https://www.instagram.com/blackpinkofficial";
            spotify = "https://open.spotify.com/artist/41MozSoPIsD1dJM0CLPjZF";
        } else {
            youtube = "https://www.youtube.com/channel/UC9rMiEjNaCSsebs31MRDCRA";
            instagram = "https://www.instagram.com/realstraykids";
            spotify = "https://open.spotify.com/artist/2dIgFjalVxs4ThymZ67YCE";
        }
        component.set('v.youtube', youtube);
        component.set('v.instagram', instagram);
        component.set('v.spotify', spotify);
	}
})