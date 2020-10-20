public class ProductSearchService {
	@AuraEnabled
    public static List<sobject> searchProduct(String searchParam){
        String likeparam = '%' +searchParam+ '%';
        String Query = '';
        if(searchParam != null){
            Query = 'Select Id, Name, ProductCode,IsActive From Product2  Where Name Like :likeparam';
        }else{
           	Query = 'Select Id, Name, ProductCode,IsActive From Product2'; 
        }
        List<sobject> sobjectList = Database.query(Query);
        System.debug('my message that I want to show up in the logs');
        return sobjectList;
    }
}