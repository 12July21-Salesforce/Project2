public class idolListController {
	@AuraEnabled(cacheable=true)
    public static List<sObject> retrieveIdolRecords() {
        return Database.query('SELECT Id, Name FROM Idol__c');
    }
}