public class ProductWrapper {
    @AuraEnabled public List<Product> products;
    public class Product{
        
   @AuraEnabled public Integer id;        
   @AuraEnabled public String name;        
   @AuraEnabled public String description;        
   @AuraEnabled public Integer msrp;    
   @AuraEnabled public String category;    
   @AuraEnabled public String picture;    
        
    }
  





}