@isTest
public class IdolControllerExtensionTest {
    @isTest static void VerifySave(){
        //cummy idol controller
        Idol__c idol = new Idol__c();
        //calls the current page
        Test.setCurrentPage(Page.CreatedIdolPage);
        //Create a standard controller with the dummy controller
        ApexPages.StandardController idolController = new ApexPages.StandardController(idol);
        
        //Get the standard controller and pass it through the controller extension
        IdolControllerExtension test = new IdolControllerExtension(idolController);
        
        System.Test.StartTest();
        test.idol.Name = 'Testing';
        test.idol.Idol_Pay__c = 12341;
        test.idol.Idol_phone__c = '1231231234';
        PageReference testPage = test.SaveMessage(); 
        System.Test.StopTest();
        
        Idol__c verifyIdolInsert = [SELECT Name FROM Idol__c WHERE Name = 'Testing'];
        System.assert(verifyIdolInsert != NULL);
        
        System.assertEquals('/apex/IdolCreatedMessage', testPage.getUrl());
    }
    @isTest static void VerifyBack(){
        //cummy idol controller
        Idol__c idol = new Idol__c();
        //calls the current page
        Test.setCurrentPage(Page.IdolCreatedMessage);
        //Create a standard controller with the dummy controller
        ApexPages.StandardController idolController = new ApexPages.StandardController(idol);
        
        //Get the standard controller and pass it through the controller extension
        IdolControllerExtension test = new IdolControllerExtension(idolController);
        
        System.Test.StartTest();
        PageReference testPage = test.Back(); 
        System.Test.StopTest();
        
        System.assertEquals('/apex/IdolVisualForcePage', testPage.getUrl());
    }
    @isTest static void VerifyCreate(){
        //cummy idol controller
        Idol__c idol = new Idol__c();
        //calls the current page
        Test.setCurrentPage(Page.IdolVisualForcePage);
        //Create a standard controller with the dummy controller
        ApexPages.StandardController idolController = new ApexPages.StandardController(idol);
        
        //Get the standard controller and pass it through the controller extension
        IdolControllerExtension test = new IdolControllerExtension(idolController);
        
        System.Test.StartTest();
        PageReference testPage = test.Create(); 
        System.Test.StopTest();
        
        System.assertEquals('/apex/IdolVisualForcePage', testPage.getUrl());
    }
    @isTest static void VerifyGetIdol(){
        //cummy idol controller
        Idol__c idol = new Idol__c();
        //calls the current page
        Test.setCurrentPage(Page.IdolVisualForcePage);
        //Create a standard controller with the dummy controller
        ApexPages.StandardController idolController = new ApexPages.StandardController(idol);
        
        //Get the standard controller and pass it through the controller extension
        IdolControllerExtension test = new IdolControllerExtension(idolController);
        
        String sortOrder = 'Name';
        String retrieveFields = 'Name, Id, Idol_Phone__c, Assigned_Location__c, Date_recruited__c, Idol_Pay__c';
        String fieldLocation = 'Idol__c';
        List<Idol__c> idols = Database.query('SELECT '+ retrieveFields +
                                                ' FROM ' + fieldLocation +
                                                ' ORDER BY '+ sortOrder+ ' ASC');
        System.Test.StartTest();
        List<Idol__c> testIdol = test.getIdols();	
        System.Test.StopTest();
        
        System.assertEquals(idols, testIdol);
    }
    
}