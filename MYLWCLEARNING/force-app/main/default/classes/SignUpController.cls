public class SignUpController {
    @AuraEnabled
    public static Boolean createUser(string fname, string lname, String emailid){
        Boolean res;
        List <Contact> cnts = [select Email from Contact where Email = :emailid];
        //System.debug('*****************arun***************');
        //System.debug(cnts);
        //System.debug('*****************arun***************');
        if (cnts.size() == 0){
            res = true;
            Contact c = new Contact();
        	//name = fname + (string)" " + lname;
        	//c.Name = fname + lname;
        	c.FirstName = fname;
        	c.LastName = lname;
        	c.Email = emailid;
        	insert c;
        	return res;
        }else{
            res = false;
            return res;
        }
        
    }

}