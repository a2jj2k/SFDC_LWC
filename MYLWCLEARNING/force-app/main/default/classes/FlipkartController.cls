public class FlipkartController {
     List <Product2> acnts = [select Name,ProductCode,IsActive from Product2];
     public List<Product2> getAcnts(){
        return acnts;
    }
}