@isTest
public class MyIdolControllerTest {
    
    
    
    @isTest static void positive(){
        Idol__c idol = new Idol__c(Name = 'TestName', Idol_phone__c = '999-999-9999');
        test.startTest();
        insert idol;
        test.stopTest();
        List<Idol__c> idolList =  MyIdolController.getIdols();
        
        System.assertEquals(1, idolList.size());
        
    }
    
    @isTest static void negative(){
        
        List<Idol__c> idolList =  MyIdolController.getIdols();
        
        System.assertEquals(0, idolList.size());  
    }
    
    @isTest static void positiveBulk(){
        
        List<Idol__c> idols = new List<Idol__c>();
        for(Integer i = 0; i <200; i++){
            Idol__c idol = new Idol__c(Name = i + 'testName', Idol_phone__c = i + '999-9999');
            idols.add(idol);
        }
        test.startTest();
        insert idols;
        test.stopTest();
        
        List<Idol__c> idolList =  MyIdolController.getIdols();
        System.assertEquals(200, idolList.size());        
    }
    
    
    
}