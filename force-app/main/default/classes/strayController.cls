public with sharing class strayController {

    public list<Idol__c> idolstray {get;set;}

    public list<Idol__c> strayController() {
        idolstray = [SELECT Name, (SELECT NAME FROM Idol_Groups__r WHERE Name='stray') FROM Idol__c];

        return idolstray;

    }
}