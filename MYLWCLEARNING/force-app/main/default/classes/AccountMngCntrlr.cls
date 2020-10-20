public class AccountMngCntrlr {

    public PageReference EditSectedRcrd() {
        for(MyWrapper mw:myWrp){
            if(mw.sltdcvalue == true){
                acc = mw.accData;
                }
            }
        return null;
    }
    public List<MyWrapper> myWrp{get;set;}
    Public Account acc{get; set;}
    public AccountMngCntrlr(){
        acc = new Account();
        myWrp = new List<MyWrapper>();
        }
    public PageReference save() {
        try{
                if(acc.id != null){
                    update acc;
                    }else{
                        insert acc;
                        }
        }catch(Exception e){
        
        }
        return new PageReference('/'+acc.Id);
        //return null;
    }


    public String accname { get; set; }
    public List<Account> acnts {get; set;}

    public PageReference Search() {
        acnts = [select Name,Type,Industry,Phone from Account where name = :accname];
        for(Account accNm:acnts ){
            myWrp .add(new MyWrapper(false, accNm));
            }
        return null;
    }
   public class MyWrapper{
       public Boolean sltdcvalue{get;set;}
       public Account accData{get;set;}
       public MyWrapper(Boolean sltdcvalue, Account accData){
           this.sltdcvalue= sltdcvalue;
           this.accData = accData;
           }
       }
}