@isTest
public with sharing class newAppointmentAuraTest {
    @isTest static void testViewLookup() {
        ListView l = [SELECT Id, Name FROM ListView WHERE SobjectType = 'Appointment__c' AND Name = 'All' ];
        //System.assert(newAppointmentAuraController.getListViews().Id,);
    }
}
