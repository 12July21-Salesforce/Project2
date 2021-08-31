({
    saveData : function(component, event, helper) {
        var action = component.get("c.save");

        action.setParams({
            appData : component.get("v.appData"),
            logData : component.get("v.logData")
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            //logic
        });

        $A.enqueueAction(action);
    },
    cancelHelper : function(component, event, helper) {
        var action = component.get("c.getListViews");
        action.setCallback(this, function(response) {
            if(response.getState() == "SUCCESS") {
                var listviews = response.getReturnValue();
                var navEvent = $A.get("e.force:navigateToList");
                navEvent.setParams({
                    "listViewId": listviews.Id,
                    "listViewName": null,
                    "scope": "Appointment__c"
                });
                navEvent.fire();
            }
        });
    }
})