@isTest
private class bandId_Test {
    @TestSetup
    private static void testSetupObjectDataFactory(){
        List<Idol_Group__c> testDataGroup = new List<Idol_Group__c>();
        List<String> bands = new List<String>{'BTS', 'Blackpink', 'Stray Kids'};
        Idol__c testidol = new Idol__c(Name='TestName', Idol_phone__c='7894651230');
        insert testidol;
        
        

        for(String b : bands) {
        	Idol_Group__c nb = new Idol_Group__c(Name=b, Lead__c='testidol.id', Vocals__c='testidol.id');
        	testDataGroup.add(nb);	        
        }                
        insert testDataGroup;
    }
    
    @isTest
    private static void btsBTS() {
        String testId = bandId.retrieveBandId('BTS');
        System.assertEquals(testId, [SELECT Id FROM Idol_Group__c WHERE Name = 'BTS'].Id);

        
        
        
        
    }
        /*Test.startTest();
        insert testCase;
        Test.stopTest();
        Integer existingCase = 0;
        List<Case> newCases = [SELECT ContactId FROM Case];
        for (Case c : newCases) {       
            if(contactList.contains(c.ContactId)) {
                ++existingCase;
            }
        }
        System.assertEquals(1, existingCase);
    }
    
    @isTest
    private static void singleCaseNewEmail() {
        List<String> contactList = new List<String>();
        for (List<Contact> con : [SELECT Id FROM Contact]) {
            for (Contact c : con) {
                contactList.add(c.Id);
            }
        }
        
        Case testCase = new Case(Status='New', Origin='Email', SuppliedEmail='test@mail.com');
        Test.startTest();
        insert testCase;
        Test.stopTest();
        Integer existingCase = 0;
        List<Case> newCases = [SELECT ContactId FROM Case];
        for (Case c : newCases) {       
            if(contactList.contains(c.ContactId)) {
                ++existingCase;
            }
        }
        System.assertEquals(0, existingCase);
    }
    
    @isTest
    private static void bulkCaseOldEmail() {
        List<String> contactList = new List<String>();
        for (List<Contact> con : [SELECT Id FROM Contact]) {
            for (Contact c : con) {
                contactList.add(c.Id);
            }
        }
        
        List<Case> testCase = new List<Case>();
        
        for(Integer i=0;i<50;i++) {
            Case a = new Case(Status='New', Origin='Email', SuppliedEmail=i + 'test@mail.com');
            testCase.add(a);
        }
        
        Test.startTest();
        insert testCase;
        Test.stopTest();
        Integer existingCase = 0;
        List<Case> newCases = [SELECT ContactId FROM Case];
        for (Case c : newCases) {       
            if(contactList.contains(c.ContactId)) {
                ++existingCase;
            }
        }
        System.assertEquals(50, existingCase);
    }
    
    @isTest
    private static void bulkCaseNewEmail() {
        List<String> contactList = new List<String>();
        for (List<Contact> con : [SELECT Id FROM Contact]) {
            for (Contact c : con) {
                contactList.add(c.Id);
            }
        }
        
        List<Case> testCase = new List<Case>();
        
        for(Integer i=0;i<50;i++) {
            Case a = new Case(Status='New', Origin='Email', SuppliedEmail=i + 'test1@mail.com');
            testCase.add(a);
        }
        Test.startTest();
        insert testCase;
        Test.stopTest();
        Integer existingCase = 0;
        List<Case> newCases = [SELECT ContactId FROM Case];
        for (Case c : newCases) {       
            if(contactList.contains(c.ContactId)) {
                ++existingCase;
            }
        }
        System.assertEquals(0, existingCase);
    }*/
    
}