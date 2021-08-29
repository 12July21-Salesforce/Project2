public class LookupLocationAura {
    
     
    public List<Location__c> findLocations {get; set;}
    
    public Location__c location {get; set;}
    
     
    @AuraEnabled
     public static List<Location__c> getLocations(ID recordID ,Integer pageSize, Integer pageNumber) {
         Integer offset = (pageNumber - 1) * pageSize;
         List<Location__c> locationList = new List<Location__c> ();
         locationList= [SELECT ID,Name, Location_Type__c, Address__c FROM Location__c LIMIT :pageSize OFFSET :offset];
        return  locationList;
    }
    

}