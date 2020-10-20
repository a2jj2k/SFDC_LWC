public class AccountHandler{
    public static Account insertNewAccount(String sName){
        Account acc= new Account();
        acc.Name = sName;
        System.debug('This is a Test');
        System.debug('This is a Test');
        try{
            insert acc;
            return acc;
           }
        catch(Exception ee){
            return null;
            }
       }
}