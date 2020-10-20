@RestResource(urlMapping = '/LeadCreate/')
global class APICreationCLass {
	@HTTPPost
    global static string dopost(){
        String fieldValue;
        String fieldName;
        String fname;
        String lname;
        String comp;
        
        List <String> leadlist = new String[3];
        
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        
        System.debug('Param is : ' + req.params);
        System.debug('Param is : ' + req.requestBody);
        
        String arr = req.requestBody.toString();
        
        JSONParser parser = JSON.createParser(arr);
        
        While(parser.nextToken() != null){
            if(parser.getCurrentToken() != JSONToken.END_OBJECT){
                parser.nextValue();
                fieldName = parser.getCurrentName();
                fieldValue = parser.getText();
                
                if(fieldName == 'First Name'){
                    fName = parser.getText();
                }else if(fieldName == 'Last Name'){
                    lName = parser.getText();
                }else if(fieldName == 'Company'){
                    comp = parser.getText();
                }
                
            }
        }
        
        Lead lc = new Lead(FirstName = fname, lastName = lname, company = comp);
        insert lc;
        return lc.ID;
    }
}