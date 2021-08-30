({
	
    retrieveRecords : function(component) {
        let idolNames = [];
        let getRecords = component.get("c.retrieveIdolRecords");
        getRecords.setCallback(this, function(response) {
            if(response.getState() === 'SUCCESS') {
                for(let i of response.getReturnValue()){
                    idolNames.push(i.Name);
                }
                component.set("v.objectOptions", idolNames);
                console.log(response.getReturnValue());
            } 
        });
        $A.enqueueAction(getRecords);
    },
    
    fireObjectSelected : function(component) {
		let objectSelected = component.getEvent("objectSelected");
        objectSelected.setParams({
            
            "chosenObject" : component.get("v.chosenObject")
        })
        console.log(component.get("v.chosenObject"));
        objectSelected.fire();
	}    
})