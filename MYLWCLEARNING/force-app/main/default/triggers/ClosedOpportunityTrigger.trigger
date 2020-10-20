trigger ClosedOpportunityTrigger on Opportunity (before insert, before update) {
    List<Task> listTask = new  List<Task>();
    for(Opportunity opp : Trigger.new){
        if(opp.StageName=='Closed Won'){
             Task t= new Task();
            t.subject = 'Follow Up Test Task';
            t.WhatId = opp.Id;
            listTask.add(t);
        }
    }
    insert listTask;
}