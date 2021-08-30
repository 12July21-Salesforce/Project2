({
        getColumns: function(){
        return [
            {label:"Idol Name", fieldName:"Name", type:"text", sortable: "true", editable :"true"},
            {label:"Phone", fieldName:"Idol_phone__c", type:"phone", sortable: "true", editable :"true"},
            {label:"Date Recruited", fieldName: "Date_recruited__c", type:"date", sortable: "true", editable :"true"},
            {label:"Assigned Location", fieldName: "Assigned_Location__c", type:"text", sortable: "true", editable :"true"},
            {label:"Sex", fieldName: "Sex__c", type:"text", sortable: "true", editable :"true"}
        ]
    },
    sortData: function (component, fieldName, sortDirection) {
        var fname = fieldName;
        var data = component.get("v.idol");
        var reverse = sortDirection !== 'asc';
        data.sort(this.sortBy(fieldName, reverse))
        component.set("v.idol", data);
    },
    sortBy: function (field, reverse) {
        var key = function(x) {return x[field]};
        reverse = !reverse ? 1 : -1;
        return function (a, b) {
            return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
        }
    },
    
    getIdols: function(component){
        let action = component.get("c.getIdols")
        action.setCallback(this, function(response) {
            
            if(response.getState() === "SUCCESS"){
                component.set("v.idol", response.getReturnValue());  
                
            }
            
        });
        $A.enqueueAction(action);
    }
    

    
})