public class DateRtrvlDemoCnrtlr{
    
    @AuraEnabled
    public List<Account> getAcnts(){
        List <Account> acnts = [select Name, Type, Industry, Phone, Fax from Account];
        return acnts;
    }
}