public class BeerSearchAuraService {
	@AuraEnabled
    public static List<sobject> searchBeer(String searchParam){
        String likeparam = '%' +searchParam+ '%';
        String Query = '';
        if(searchParam != null){
            Query = 'Select Id, Name, Alcohol__c, brewery_id__c, brewery_Name__c, Id__c, Price__c, Remaining_Quantity__c, Tags__c, Total_Quantity__c From Beer__c Where Name Like :likeparam LIMIT 10';
        }else{
           	Query = 'Select Id, Name, Alcohol__c, brewery_id__c, brewery_Name__c, Id__c, Price__c, Remaining_Quantity__c, Tags__c, Total_Quantity__c From Beer__c LIMIT 50'; 
        }
        List<sobject> sobjectList = Database.query(Query);
        return sobjectList;
    }
}