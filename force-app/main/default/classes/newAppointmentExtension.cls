public with sharing class newAppointmentExtension{
    //member variables to maintain the state of the wizard
    public Appointment__c app;
    public Logistic__c log;
  
      public newAppointmentExtension(ApexPages.StandardController stdController) {
        this.app = (Appointment__c)stdController.getRecord();
    }
  
    //return of member variables to create empty record for the variable if its called for the first time 
    public Appointment__c getAppointment(){
        if(app == NULL) app = new Appointment__c();
        return app; 
    }
    public Logistic__c getLogistic(){
        if(log == NULL) log = new Logistic__c();
        return log;
    }
    //control the navigation through the pages 
    public PageReference appCreation(){
        return Page.AppPageWiz;
    }
    public PageReference logCreation(){
        return Page.LogPageWiz;
    }
    //cancels the wizard and sends you back to the home page
    public PageReference cancel() {
        PageReference home = new PageReference('/006');
        home.setRedirect(true);
        return home; 
      }

    public PageReference save(){
  
        insert app;
        insert log;

    //send user to detail page for new opportunity

       PageReference appPage = new ApexPages.StandardController(app).view();
       appPage.setRedirect(true);

        return appPage;
    }
}