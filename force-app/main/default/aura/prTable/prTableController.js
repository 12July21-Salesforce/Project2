({
	doInit : function(component, event, helper) {
		helper.doInit(component);
        helper.retrieveRecords(component);
	},
    
    retrieveRecords : function(component, event, helper) {
        helper.retrieveRecords(component);
    },
    
	fireRecordSelected : function(component, event, helper) {
        helper.fireRecordSelected(component, event);
    }
})