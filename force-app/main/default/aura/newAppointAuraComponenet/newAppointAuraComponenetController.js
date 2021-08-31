({
    /*saveRecord : function(component, event, helper) {
        helper.saveData(component, event, helper);
    },*/
    cancelRecord : function(component, event, helper) {
        helper.cancelHelper(component, event, helper);
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