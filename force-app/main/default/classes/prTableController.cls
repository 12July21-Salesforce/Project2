public class prTableController {

    @AuraEnabled(cacheable=true)
    public static List<sObject> retrievePrRecords(String objectName) {
        return Database.query('SELECT Id, Name, Details__c, Date__c FROM Public_Relations__c WHERE Idol__r.Name = \'' + objectName + '\'');
    }
}