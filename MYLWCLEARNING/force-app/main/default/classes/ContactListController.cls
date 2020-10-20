public class ContactListController {
	
    @AuraEnabled
    public static List<Contact> getContactList(String accountId){
        List <Contact> contactList = new List<Contact>([Select Id, FirstName, LastName, Email, Phone 
                                                        From Contact where AccountId =: accountId]);
        System.debug(contactList);
        return contactList;
    }
    
    @AuraEnabled
    public static Contact createContact(Contact con, Id AccountId){
        con.AccountId = AccountId;
        insert con;
        return con;
    }
}