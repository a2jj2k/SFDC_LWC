@RestResource(urlMapping='/AccountDataServiceREST/*')
global class AccountDataServiceREST{

    @HttpGet
    global static List<Account> getAccounts(){
        List <Account> Acc = [SELECT Id,Name from Account];
        return Acc;
        }
        
    @HttpPost    
    global static String createNewAccount(String Name){
        Account a = new Account();
        a.Name = Name;
        insert a;
        
        return 'Account Cereated ' + a.Id;
        }
        
    @HttpDelete
    global static String deleteAccountById(){
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String AccId = req.requestURI.substring(req.requestURI.lastIndexof('/')+1);
        Account result = [SELECT Id, Name, Phone, Website From Account Where id = :AccId];
        delete result;
        
        return 'Account Deleted';
        }
    @HttpPut
    global static String updateAccount(String Id, String NewName){
        Account a = [SELECT ID, Name FROM Account WHERE Id = :Id];
        a.Name = NewName;
        update a;
        
        return 'Account Updated';
        }
    
    }