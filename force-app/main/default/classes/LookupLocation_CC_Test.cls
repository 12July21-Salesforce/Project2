@isTest
private with sharing class LookupLocation_CC_Test {    
   

    @isTest static void LookupLocation_CC_Test() {
        System.Test.startTest();
        List<Location__c> testLocations;
        Location__c l = new Location__c();
        
            l.Name='testing1'; 
            l.Location_Type__c='Recording Studio'; 
            l.Address__c='123 Memory Lane'; 
            testLocations.add(l);
        insert testLocations;
        
        List<Location__c> check = [SELECT Name, Location_Type__c, Address__c FROM Location__c LIMIT 1];

        System.assertEquals(testLocations, check);
        System.Test.stopTest();
    }
    
    
    
}