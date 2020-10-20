public class AllAccountsDemo {
    
    @AuraEnabled
    public static List<Account> getAcntsforDemo(){
        List <Account> acnts = [select Name, Type, Industry, Phone, Fax, AccountNumber from Account];
        return acnts;
    }

}