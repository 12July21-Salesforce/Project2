({
    /*saveRecord : function(component, event, helper) {
        helper.saveData(component, event, helper);
    },*/
    cancelRecord : function(component, event, helper) {
        //helper.cancelHelper(component, event, helper);
        var cancelService = component.find("cancelService");
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                "objectApiName": "Appointment__c",
                "actionName": "list"
            }/*,
            state: {
                "filterName": "All appointments"
            }*/
        }
        cancelService.navigate(pageReference);
    },
    
    handleOnSuccess : function(component, event, helper) {
        var payload = event.getParams().response;
        var navService = component.find("navService");
        
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                "recordId": payload.id,
                "objectApiName": "Appointment__c",
                "actionName": "view"
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
            
    handleSubmit : function(component, event, helper) {
        var editForms = component.find("editforms");
        var forms = [].concat(editForms || []);
        alert("Record was successfully created.")
        forms.forEach( (form) =>{
            form.submit();
        })
	}
})