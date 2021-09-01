@isTest
public class newAppointmentAuraTest {
    @isTest 
    static void testViewLookup() {
        //List<ListView> l2 = newAppointmentAuraController.getListViews();
        //newAppointmentAuraController a = new newAppointmentAuraController();
        List<ListView> views = newAppointmentAuraController.getListViews();
        System.assert(views.size() == 1);
    }
}
