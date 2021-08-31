public class MyIdolController {
   
    @AuraEnabled
    public static List<Idol__c> getIdols() {
        return [SELECT Id, Name, Idol_phone__c, Date_recruited__c, Assigned_Location__c, Sex__c FROM Idol__c];
        
    }


}