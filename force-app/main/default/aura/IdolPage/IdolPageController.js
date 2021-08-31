({
    DoInit : function(component, event, helper) {
        component.set("v.columns", helper.getColumns());
        
        helper.getIdols(component);
        
        
    }, 
    updateSorting: function(component, event, helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        component.set("v.sortedBy", fieldName);
        component.set("v.sortedDirection", sortDirection);
        helper.sortData(component, fieldName, sortDirection);
    } 
    
    
})