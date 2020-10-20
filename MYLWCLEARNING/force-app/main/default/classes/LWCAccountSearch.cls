public with sharing class LWCAccountSearch {
    public LWCAccountSearch() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String actName){
        String keyString = '%'+actName+'%';
        return [select id, name from Account where name like:keyString];
        
    }
}
