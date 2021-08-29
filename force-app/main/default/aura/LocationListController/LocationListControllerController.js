({
   
    helperMethod : function(component, event, helper) {

        var actions = [
            {label: 'Edit', name: 'edit'},
            {label: 'Delete', name: 'delete'},
            {label: 'View', name: 'view'}
        ];
        component.set("v.Columns", [
            {label:"Location Name", fieldName:"Name", type:"text",editable:'true' },
            {label:"Address", fieldName:"linkAddress", type: 'url',
               typeAttributes: { label: {fieldName: "Address__c"}}
              , tooltip: { fieldName: "Address__c"} ,editable:'true' 
            },
            {label:"Location Type", fieldName:"Location_Type__c", type:"text" ,editable:'true'},
            {type: 'action', typeAttributes: { rowActions: actions } } 

        ]);
        
         helper.retrieveRecords(component);
         
          
        
    }, handleShowSpinner: function(component, event, helper) {
        helper.showSpinner(component, event, helper);
    }  ,
       handleHideSpinner: function(component, event, helper) {
        helper.hideSpinner(component, event, helper);
    }  ,
      handleReset: function(component, event, helper) {
        helper.helperReset(component, event, helper);
    }  ,
    handleSubmit: function(component, event, helper) {
        event.preventDefault();
        helper.handleFormSubmit(component);
    },
    //
   handleOnSave: function(component, event, helper) {

    helper.onSave(component, event, helper);
    
    }  ,
    onPageSizeChange: function(component, event, helper) {        
        helper.preparePagination(component, component.get('v.filteredData'));
    },
    onFirst: function(component, event, helper) {        
        component.set("v.currentPageNumber", 1);
        helper.setPagePagination(component);
    },
    onPrev: function(component, event, helper) {        
        let pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber - 1);
        helper.setPagePagination(component);
    },
    onNext: function(component, event, helper) {        
        let pageNumber = component.get("v.currentPageNumber");
        component.set("v.currentPageNumber", pageNumber + 1);
        helper.setPagePagination(component);
    },
    onLast: function(component, event, helper) {        
        component.set("v.currentPageNumber", component.get("v.totalPages"));
        helper.setPagePagination(component);
    },
    onSaveLoc : function (component, event, helper) {
        helper.saveDataTable(component, event, helper);
    },

//\-----------------------------
    handleNext : function(component, event, helper) { 
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber+1);
        helper.retrieveRecords(component, helper);
    },
     
    handlePrev : function(component, event, helper) {        
        var pageNumber = component.get("v.pageNumber");
        component.set("v.pageNumber", pageNumber-1);
        helper.retrieveRecords(component, helper);
    },
 
    handleRowAction: function (component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'edit':
                helper.editRecord(component, event,row);
                break;
            case 'delete':
                helper.deleteRecord(component, event);
                break;
            case 'view':
                helper.viewRecord(component, event);
                break;
        }
    },
    detailnavigate:function(component,event,helper) {
		helper.editRecord (component,event);
	},


    
})