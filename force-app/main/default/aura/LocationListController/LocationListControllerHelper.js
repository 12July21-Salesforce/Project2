({
    retrieveRecords: function(component,event,helper){

        var pageSize = component.get("v.pageSize").toString();
        var pageNumber = component.get("v.pageNumber").toString();

        var action = component.get("c.getLocations");
            action.setParams({
                recordId: component.get("v.recordId"),
                'pageSize' : pageSize,
                'pageNumber' : pageNumber

            });
            action.setCallback(this, function(response) {
                var state = response.getState();
                 if (state === "SUCCESS") {
                    var locationList = response.getReturnValue();
                    if(locationList.length < component.get("v.pageSize")){
                        component.set("v.isLastPage", true);
                    } else{
                        component.set("v.isLastPage", false);
                    }
                    locationList.forEach(function(item){
                    
                        if(item.Address__c== null ||item.Address__c== ''){
                           
                             
                            item.Address__c = '';
                        }
                        else{
                            item.linkAddress= 'https://www.google.com/maps/search/'+item.Address__c;
                            
        
                        }
                        
                        });
                        $A.get('e.force:refreshView').fire();
                    component.set("v.dataSize", locationList.length);
                    component.set("v.locationList", response.getReturnValue());
                }
                 
                
            });
            component.set('v.spinner',false);   
    
            $A.enqueueAction(action);
    
    
         } ,

         helperReset: function(component, event, helper) {
        
        
            component.find('Name').set('v.value', null);
            component.find('Address').set('v.value', null); 
            component.find('LocationType').set('v.value', null);
    
    
            
        },
        showSpinner: function(component, event, helper) {
            
             component.set("v.Spinner", true); 
        },

        hideSpinner : function(component,event,helper){
            // make Spinner attribute to false for hide loading spinner    
              component.set("v.Spinner", false);
           },
        helperReset: function(component, event, helper) {
        
        
            component.find('Name').set('v.value', null);
            component.find('Address').set('v.value', null); 
            component.find('LocationType').set('v.value', null);
    
    
            
        },
       



         //


    editRecord : function(component, event,row) {
        
        var navService = component.find("navService");
    
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                "recordId": row.Id,
                "objectApiName": cmp.get("v.objectName"),
                "actionName": "edit"
            }
        }
        navService.navigate(pageReference);

        // var saveEvent = $A.get("e.c:LocationComponentEvent");
        // var locEdit = component.get("v.locToedit");
        // saveEvent.setParams({ "locSave": locEdit});
         
        // saveEvent.fire();
    }, 
    viewRecord : function(component, event) {
        var row = event.getParam('row');
        var recordId = row.Id;
        var navEvt = $A.get("event.force:navigateToSObject");
        navEvt.setParams({
            "recordId": recordId,
            "slideDevName": "detail"
        });
        navEvt.fire();
    },
    deleteRecord : function(component, event) {
        var action = event.getParam('action');
        var row = event.getParam('row');
         
        var action = component.get("c.deleteLocation");
        action.setParams({
            "acc": row
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS" ) {
                var rows = component.get('v.recordId');
                var rowIndex = rows.indexOf(row);
                rows.splice(rowIndex, 1);
                component.set('v.recordId', rows);
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "The record has been delete successfully."
                });
                toastEvent.fire();
            }
        });
        $A.enqueueAction(action);
    },
    

    //


     


   
 
    
})