@IsTest
public class AccountProcessorTest {
    public static testmethod void TestAccountProcessorTest(){
        Account a = new Account();
        a.Name = 'Test Account';
        Insert a;
        
        Contact cont = new Contact();
        cont.FIrstName = 'JJ';
        cont.LastName = 'Hello';
        cont.AccountId = a.Id;
        Insert cont;
        
        set<Id> setAccId = new Set<ID>();
        setAccId.add(a.Id);
        
        Test.startTest();
        AccountProcessor.countContacts(setAccId);
        Test.stopTest();
        
    }
}