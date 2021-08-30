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

        var row = event.getParam('row');
        var recordId = row.Id;
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": recordId
        });
        editRecordEvent.fire();
        
      
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
            "loc": row
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            
        });
        $A.enqueueAction(action);
    },
    

    //

    handleFormSubmit: function(component) {

       

        var showValidationError = false;
        var field1 = component.find("Name");
        var field2 = component.find("Address");
        var field3 = component.find("LocationType" );
        var vaildationFailReason = '';
        
            if( $A.util.isEmpty(field1.get("v.value"))&& $A.util.isEmpty(field2.get("v.value"))
            &&$A.util.isEmpty(field3.get("v.value"))
            ){

                 
                    showValidationError = true;
                    vaildationFailReason = "Fill in all the fields, they cannot be empty!";
                

            }
            else{


                if(  $A.util.isEmpty(field1.get("v.value"))){
                    showValidationError = true;
                    vaildationFailReason = "The field location name cannot be empty!";
                } 
                if(  $A.util.isEmpty(field2.get("v.value"))){
                    showValidationError = true;
                    vaildationFailReason = "The field address cannot be empty!";
                } 
                if( $A.util.isEmpty(field3.get("v.value"))){
                    showValidationError = true;
                    vaildationFailReason = "The field location type cannot be empty!";
                } 
            

            }
         
            
         
            if (!showValidationError) {
              
                component.find("recordEditFormForNewLocation" ).submit();  
            } else {
                component.find('OppMessage').setError(vaildationFailReason);
                 
            }
    },
     


   
 
    
})