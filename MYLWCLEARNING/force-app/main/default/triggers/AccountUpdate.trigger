trigger AccountUpdate on Account (before insert, before update, after update) {
    if(trigger.isBefore && trigger.isUpdate){
        for(Account acc :trigger.new){
            if(acc.AccountNumber == '6789'){
                acc.addError('bad');
            }
        acc.site = 'Arun';
        }
    }
    if (trigger.IsAfter && trigger.IsUpdate){
    for(Account acc :trigger.new){
        Contact con = new Contact();
        con.LastName = 'Arun';
        con.AccountID = acc.ID;
        insert con;
    }
    }
}