public class CurrencyConverterClass {
    public static Decimal convertCurrencyToINR(Decimal eur){
        Decimal inr = 0.0;
        
        HTTP h = new HTTP(); //create http request
        HTTPRequest req = new HTTPRequest();
        
        req.setEndpoint('https://api.exchangeratesapi.io/latest');
        req.setMethod('GET');
        
        HTTPResponse res = h.send(req); 
        
        Map<String,Object> jsonBody = (Map<String,Object>)Json.deserializeUntyped(res.getBody());
        
        System.debug(jsonBody);
        
        Map<String,Object> mMap = (Map<String,Object>) jsonBody.get('rates');
        
        Decimal conversionrate = (Decimal) mMap.get('INR');
        System.debug(conversionrate);
        
        inr = eur * conversionrate;
        
        return inr;
    }
}