@isTest
private with sharing class   LookupLocationAura_Test {
    @isTest static void LookupLocationAura_Test() {

        System.Test.startTest();
        List<Location__c> testLocations = new List<Location__c> ();
        Location__c locationRecord = new Location__c( 
        
            Name='Test',
            Location_Type__c='Office',
            Address__c='3342 Palmetto St');
            testLocations.add(locationRecord);
            insert testLocations;
        
        List<Location__c> check = [SELECT Name, Location_Type__c, Address__c FROM Location__c LIMIT 1];

        System.assertEquals(testLocations, check);
        System.Test.stopTest();

    }
}
