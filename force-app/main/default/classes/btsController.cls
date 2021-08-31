public with sharing class btsController {

    public list<Idol__c> idolbts {get;set;}

    public list<Idol__c>  btsController() {

        idolbts = [SELECT Name, (SELECT NAME FROM Idol_Groups__r WHERE Name='bts') FROM Idol__c];

        return idolbts;
        

    }
}