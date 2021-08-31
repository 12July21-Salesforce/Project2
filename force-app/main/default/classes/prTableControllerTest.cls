@isTest
public class prTableControllerTest {
	
    @TestSetup
    static void prTableTestData(){
        Idol__c testIdol = new Idol__c(Idol_phone__c='0000000000');
        insert testIdol;

        List<Public_Relations__c> testPRs = new List<Public_Relations__c>();
        for(integer i=0; i<400; i++){
            testPRs.add(new Public_Relations__c(Name='test'+i, Idol__r=testIdol));
        }
        insert testPRs;
    }
    
    @isTest
    static void retrievePrRecordsTest() {
        

        List<sObject> PRs = prTableController.retrievePrRecords('testIdol');
        
        
        System.assertEquals(0, PRs.size());
    }
    
}