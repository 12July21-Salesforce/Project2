public with sharing class newAppointmentAuraController {
    /*@AuraEnabled
    public static void save(Appointment__c appData, Logistic__c logData) {
        try {
            insert appData;
            insert logData;
        } catch(Exception ex) {
            System.debug(ex.getMessage());
        }
    }*/

    @AuraEnabled
    public static List<ListView> getListViews() {
        List<ListView> listviews = 
        [SELECT Id, Name FROM ListView WHERE SobjectType = 'Appointment__c' AND Name = 'All'];
        /*for(ListView l: listviews) {
            System.debug(l.Name);
        }*/
        return listviews;
    }
}