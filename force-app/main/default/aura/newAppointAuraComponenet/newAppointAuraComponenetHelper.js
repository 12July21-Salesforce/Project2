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
                var cancelService = component.find("cancelService");
                /*var navEvent = $A.get("e.force:navigateToList");
                navEvent.setParams({
                    "listViewId": listviews.Id,
                    "listViewName": 'All',
                    "scope": "Appointment__c"
                });
                navEvent.fire();*/
                var pageReference = {
                    type: 'standard__objectPage',
                    attributes: {
                        "objectApiName": "Appointment__c",
                        "actionName": "view"
                    },
                    state: {
                        filterName: 'All'
                    }
                }
                cancelService.navigate(pageReference);
            }
        });
    }
})