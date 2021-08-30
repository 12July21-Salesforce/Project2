({
    doInit : function(component) {
        component.set("v.columns", [
            {label: 'Event Name', fieldName: 'Name', type: 'Text'},
            {label: 'Details', fieldName: 'Details__c', type: 'Long Text Area'},
            {label: 'Date', fieldName: 'Date__c', type: 'Date/Time'}
        ]);
    },
    
    retrieveRecords : function(component) {
        let getRecords = component.get("c.retrievePrRecords");
        getRecords.setParams({
            "objectName" : component.get("v.chosenObject")
        });
        getRecords.setCallback(this, function(response) {
            if(response.getState() === 'SUCCESS') {
                component.set("v.data", response.getReturnValue());
                console.log(response.getReturnValue());
            } 
        });
        $A.enqueueAction(getRecords);
    },
          
    fireRecordSelected : function(component, event) {
        if(event.getParam("selectedRows").length > 0){
        	let selectedRecordId = event.getParam("selectedRows")[0].Id;
               
        	let recordSelected = $A.get("e.c:prRecordSelected");
       	 	recordSelected.setParams({
            	"chosenObject" : component.get("v.chosenObject"),
            	"chosenRecordId": selectedRecordId
        	});
        	recordSelected.fire();
        }
    } 
})