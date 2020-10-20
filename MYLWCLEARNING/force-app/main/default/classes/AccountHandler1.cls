public class AccountHandler1{
    public static void insertAccount(Integer value){
        Integer counter = 1;
        //create a list to add our accounts
        List<Account> addAccounts= new List<Account>();
        
        while(counter <= value){
            //display the current counter value
           // System.debug('Counter Value before Incrementing ' + counter);
            
            //create a new account
            Account store = new Account();
            store.Name = 'Acme Inc n ' + counter;
            store.AccountNumber = 'A000n' + counter;
            addAccounts.add(store);
            counter = counter + 1;
            System.debug(addAccounts);
            }
            
            insert addAccounts;
        }
    }