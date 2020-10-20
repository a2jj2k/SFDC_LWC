public class Jsonde {
    @AuraEnabled public static ProductWrapper makeGetCallout() {
  
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://long-running.herokuapp.com/products');
        request.setMethod('GET');
        HttpResponse response = http.send(request);  
        //system.debug(response.getBody());
          return (ProductWrapper) JSON.deserialize(response.getBody(), ProductWrapper.class);
                                      
    }           
}