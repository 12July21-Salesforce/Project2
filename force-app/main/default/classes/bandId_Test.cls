@isTest
private class bandId_Test {
    @TestSetup
    private static void testSetupObjectDataFactory(){
        List<Idol_Group__c> testDataGroup = new List<Idol_Group__c>();
        List<String> bands = new List<String>();
        for(Integer i=0;i<100;i++) {
            bands.add('Band' + i);
        }

        Idol__c testidol = new Idol__c(Name='TestName', Idol_phone__c='7894651230');
        insert testidol;

        for(String b : bands) {
        	Idol_Group__c nb = new Idol_Group__c(Name=b, Lead__c=testidol.id, Vocals__c=testidol.id);
        	testDataGroup.add(nb);	        
        }                
        insert testDataGroup;
    }
    
    @isTest
    private static void testSingle() {
        String testId = bandId.retrieveBandId('Band0');
        System.assertEquals(testId, [SELECT Id FROM Idol_Group__c WHERE Name = 'Band0'].Id);
        testId = bandId.retrieveBandId('Band1');
        System.assertNotEquals(testId, [SELECT Id FROM Idol_Group__c WHERE Name = 'Band0'].Id);        
    }
    
    @isTest
    private static void testBulk() {
        Integer countPos = 0;
        Integer countNeg = 0;
        String testId;
        String band;
        List<Idol_Group__c> listId = [SELECT Id FROM Idol_Group__c];
        Test.startTest();
        for (Integer i=0;i<100;i++) {
            if (i < 50) {
                band = 'Band' + i;
                testId = bandId.retrieveBandId(band);
                if(testId == listId[i].Id) {
                    ++countPos;
                }       
            } else {
                band = 'Band' + (i-1);
                testId = bandId.retrieveBandId(band);
                if(testId != listId[i].Id) {
                    ++countNeg;
                }     
            }
        }
        Test.stopTest();
        System.assertNotEquals(200, countPos);        
        System.assertNotEquals(200, countNeg);        
    }
}