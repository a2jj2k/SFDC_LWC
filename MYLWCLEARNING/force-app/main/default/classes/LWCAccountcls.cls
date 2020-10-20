public with sharing class LWCAccountcls {
    public LWCAccountcls() {

    }

    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountList(){
        return[SELECT Id, Name,Type,Industry,AnnualRevenue
                FROM Account];
    }
}
