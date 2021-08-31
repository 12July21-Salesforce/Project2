@isTest
private with sharing class   LookupLocationAura_Test {


    @testSetup static void setup() {
         
        List<Location__c> testLocations = new List<Location__c> ();
        for(Integer i=0;i<5;i++) {
            testLocations.add(new Location__c( 
        
                Name='Test'+i,
                Location_Type__c='Office',
                Address__c='Test Address'+i));
        }
        insert  testLocations;        
    }
    

   

    @isTest static void updateLocationAddress() {

        System.Test.startTest();
        Location__c updateLocRecord = [SELECT Name, Location_Type__c, Address__c   FROM Location__c WHERE Name='Test0'LIMIT 1];
        
        updateLocRecord.Address__c = 'Random address';

        LookupLocationAura.updateLocation(updateLocRecord);
        
        Location__c updateLocRecordAfter = [SELECT Name, Location_Type__c, Address__c   FROM Location__c WHERE Name='Test0' LIMIT 1];

        System.assertEquals('Random address', updateLocRecordAfter.Address__c);
        System.Test.stopTest();

    }


    @isTest static void deleteLocRec() {

        System.Test.startTest();
        Location__c locRecordToDelete = [SELECT Name, Location_Type__c, Address__c   FROM Location__c WHERE Name='Test1'LIMIT 1];
        
        LookupLocationAura.deleteLocation(locRecordToDelete);
        
        Location__c retrieveDeletedRec = [SELECT ID,IsDeleted   FROM Location__c WHERE Id = :locRecordToDelete.Id ALL ROWS];
        
        System.AssertEquals(retrieveDeletedRec.IsDeleted,true);
        System.Test.stopTest();

    }

    @isTest static void retrieveLocationsEquals() {

        System.Test.startTest();
        Location__c retrieveLoc = [SELECT Id,Name, Location_Type__c, Address__c   FROM Location__c  LIMIT 1];
      
         List < Location__c> retrieveLocList = [SELECT Id,Name, Location_Type__c, Address__c   FROM Location__c   LIMIT 1];
         System.assertEquals(retrieveLocList ,LookupLocationAura.getLocations(retrieveLoc.Id,1,1));
             
        
 

        
        System.Test.stopTest();

    }

    @isTest static void retrieveLocationsandCompareNotEquals() {

        System.Test.startTest();
        Location__c retrieveLoc = [SELECT Id,Name, Location_Type__c, Address__c   FROM Location__c  LIMIT 1];
      
         List < Location__c> retrieveLocList = [SELECT Id,Name, Location_Type__c, Address__c   FROM Location__c   LIMIT 1];
         List < Location__c> retrieveLocListDiff = [SELECT Id,Name, Location_Type__c, Address__c   FROM Location__c  ORDER BY Name DESC LIMIT 1  ];
         System.assertNotEquals(retrieveLocListDiff ,LookupLocationAura.getLocations(retrieveLoc.Id,1,1));
        
        
 

        
        System.Test.stopTest();

    }
 
}