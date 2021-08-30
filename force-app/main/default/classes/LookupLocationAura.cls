public class LookupLocationAura {
    
      
    
     
    @AuraEnabled
     public static List<Location__c> getLocations(ID recordID ,Integer pageSize, Integer pageNumber) {
         Integer offset = (pageNumber - 1) * pageSize;
         List<Location__c> locationList = new List<Location__c> ();
         locationList= [SELECT ID,Name, Location_Type__c, Address__c FROM Location__c LIMIT :pageSize OFFSET :offset];
        return  locationList;
    }
    @AuraEnabled
    public static void deleteLocation( Location__c loc){

        delete loc;


    }
    
    @AuraEnabled
    public static void updateLocation( Location__c locUpdt){

        update locUpdt;


    }

}