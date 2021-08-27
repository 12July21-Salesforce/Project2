public class bandId {
	@AuraEnabled(cacheable=true)
    public static String retrieveBandId(String bandName) {
        String name = bandName;
        String newId;
        List<Idol_Group__c> queryId = Database.query('SELECT Id FROM Idol_Group__c WHERE Name = :name');
        newId = queryId[0].Id;
        return newId;
    }
}