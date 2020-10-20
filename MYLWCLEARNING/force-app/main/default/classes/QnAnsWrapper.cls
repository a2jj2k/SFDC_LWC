public class QnAnsWrapper {
	@AuraEnabled public  String qnids;
    @AuraEnabled public String qndesc;
    @AuraEnabled public List<My_Survey_Question_Ans__c> optlist;
    
    /*public class Options{
        @AuraEnabled public  String opt_id;
        @AuraEnabled public String opt_desc;
    }*/
}