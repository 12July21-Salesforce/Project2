({
	doInit : function(component) {
		let bandID = component.get('c.retrieveBandId');
        bandID.setParams({
            'bandName' : component.get('v.bandName')
        });
        bandID.setCallback(this, function(response) {
            if(response.getState() === 'SUCCESS') {
                component.set('v.Id', response.getReturnValue());
            } 
        });
        $A.enqueueAction(bandID);
	}
})