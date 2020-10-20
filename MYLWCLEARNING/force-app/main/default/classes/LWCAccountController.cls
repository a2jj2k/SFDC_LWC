public with sharing class LWCAccountController {
    public LWCAccountController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select id,name,type,industry from Account limit 10];
    }

    @AuraEnabled
    public static List<Account> getAccountRecordsList(){
        return [select id,name,type,industry from Account limit 10];
        
    }
}
