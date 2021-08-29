public with sharing class blackpinkController {
    
    public list<Idol__c> idolblack {get;set;}
        
        
    public list<Idol__c> blackpinkController() {
    
    
    idolblack = [SELECT Name, (SELECT NAME FROM Idol_Groups__r WHERE Name='black') FROM Idol__c];

    return idolblack;

        }
}