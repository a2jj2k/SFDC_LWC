public class AccountProcessor {
	@future
    public static void countContacts(Set<id> setId){
        List<Account> lstAccount = [SELECT Id, Number_of_Contacts__c, (SELECT Id FROM Contacts) FROM Account WHERE Id in :setId];
        for(Account acct : lstAccount){
            List<Contact>lstCont = acct.Contacts;
            acct.Number_of_Contacts__c = lstCont.size();
        }
        update lstAccount;
    }
}