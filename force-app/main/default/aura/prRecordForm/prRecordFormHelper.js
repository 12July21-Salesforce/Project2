({
	updateAttributes : function(component, event) {
		
        component.set("v.recordId", event.getParam("chosenRecordId"));
        component.set("v.displayForm", true);
        console.log(event.getParam("chosenObject"));
	}
    
})