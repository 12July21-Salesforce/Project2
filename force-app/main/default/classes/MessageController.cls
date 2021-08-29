public with sharing class MessageController {






    public PageReference MessageToHomePage(){

        PageReference pageR =  Page.ShelterHomePage;

        return pageR;
       
        
        



    }
    
    public void displayApexMsg(){

    ApexPages.AddMessage(new ApexPages.Message(ApexPages.Severity.CONFIRM,'Your registration was Successfully!'));


    }
}