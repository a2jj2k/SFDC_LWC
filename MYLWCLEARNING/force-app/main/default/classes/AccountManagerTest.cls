@isTest
private class AccountManagerTest {
    static testMethod void testMethod1(){
        Account objAccount = new Account(Name = 'Test Account');
        insert objAccount;
        
        Contact objcontact = new Contact(LastName = 'Test Contact',
                                        AccountId = objAccount.Id);
        insert objcontact;
        
        Id recordId = objAccount.Id;
        RestRequest request = new RestRequest();
        request.requestURI = 
            'https://jose-arun2-dev-ed.lightning.force.com/services/apexrest/Accounts/' + 
            recordId + '/contacts';
        
        request.httpMethod = 'GET';
        RestContext.request = request;
        
        Account thisAccount = AccountManager.getAccount();
        
        system.assert(thisAccount != null);
        system.assertEquals('Test Account', thisAccount.Name);
        
        
    }

}