({
	doInit : function(component) {
		let bandName = component.get('v.bandName');
        let bandImg1;
        let bandImg2;
        let bandImg3;
        if(bandName == 'BTS'){
            bandImg1 = "bts1.jpg";
            bandImg2 = "bts2.jpg";
            bandImg3 = "bts3.jpg";
        } else if(bandName == 'Blackpink'){
            bandImg1 = "black1.jpg";
            bandImg2 = "black2.jpg";
            bandImg3 = "black3.jpg";
        } else {
            bandImg1 = "stray1.jpg";
            bandImg2 = "stray2.jpg";
            bandImg3 = "stray3.jpg";
        }
        component.set('v.img1', bandImg1);
        component.set('v.img2', bandImg2);
        component.set('v.img3', bandImg3);
	}
})