public class MysurveyController {
    @AuraEnabled
    public static List<Mysurvey__c>  fetchAllsurveys(){
        List<Mysurvey__c> allsurveys = [select Id,Name from Mysurvey__c ];
        //Map<String,String> Mymap = new Map<String,String>();
        
        return allsurveys;
        }
    
    @AuraEnabled 
    public static List<QnAnsWrapper> fetchqnsdisp(String srvid){
        //a0P2v00001Ox6CWEAZ
        List<QnAnsWrapper> fulllist =  new List<QnAnsWrapper>();
        List<My_Survey_Question__c> my_list = [select Id,Name from My_Survey_Question__c where Mysurvey__c = :srvid];
        List<String> qnid = new List<String>();
        for (My_Survey_Question__c obj : my_list) {
            string qid = obj.Id;
            qnid.add(qid);
        }
        System.debug(qnid);
        for(String obj : qnid){
            List<My_Survey_Question__c> qns_list = [select Id,Name from My_Survey_Question__c where Id = :obj];
            QnAnsWrapper temp = new QnAnsWrapper();
            temp.qnids = qns_list[0].Id;
            temp.qndesc = qns_list[0].Name;
            List<My_Survey_Question_Ans__c> opts_list = [select Id, Name from My_Survey_Question_Ans__c where My_Survey_Question__c = :obj];
            temp.optlist = opts_list;
            fulllist.add(temp);
        }
        
        return fulllist;

    }

}