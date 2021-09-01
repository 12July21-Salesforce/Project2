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

    @TestVisible
    @AuraEnabled
    public static List<ListView> getListViews() {
        // Unfortunately this method isn't being used in javascript because it was not working properly
        // Returns list view that displays all appointments
        List<ListView> listviews = 
        [SELECT Id, Name FROM ListView WHERE SobjectType = 'Appointment__c' AND Name = 'All'];
        /*for(ListView l: listviews) {
            System.debug(l.Name);
        }*/
        return listviews;
    }
}