@isTest
public class idolListControllerTest {
    @TestSetup
    static void IdolListTestData(){
        List<Idol__c> testIdols = new List<Idol__c>();
        for(integer i=0; i<400; i++){
            testIdols.add(new Idol__c(Name='test'+i, Idol_phone__c='00000000'+i));
        }
        insert testIdols;
    }
    
    @isTest
    static void testRetrieveIdolRecords(){
        
        List<sObject> idols = idolListController.retrieveIdolRecords();        
        
        
        System.assertEquals(400, idols.size());
    }
}