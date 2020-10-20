({
	loadQuestions : function(component, event, helper) {
        //var srvid =  component.find("QnS").get("v.value");
        var srvid = component.get("v.surveyid");
        console.log("loadQuestions : " + srvid);
        var action1 = component.get("c.fetchqnsdisp");
        action1.setParams({ 
                "srvid": srvid
        		});
        action1.setCallback(this, function(a) {
        	var state = a.getState();
             //console.log("state  " + state);
            if (state === "SUCCESS") {
            	var qnlist = a.getReturnValue();
                //console.log("slisthi  " + slist[0].Name);
                //console.log("slistid  " + slist[0].Id);
               	component.set("v.questions",qnlist);
                
                var kevin = component.get('c.load_first');
        		$A.enqueueAction(kevin);
                }else{
                    alert("Failed");
         		}
        	});
             $A.enqueueAction(action1);
		
	},
    
    doInit : function(component, event, helper) {
        
        var action = component.get("c.fetchAllsurveys");
        action.setCallback(this, function(a) {
        	var state = a.getState();
             //console.log("state  " + state);
            if (state === "SUCCESS") {
            	var slist = a.getReturnValue();
                console.log("slisthi  " + slist[0].Name);
                console.log("slistid  " + slist[0].Id);
               	component.set("v.surveys",slist);
                }else{
                    alert("Failed");
         		}
        	});
             $A.enqueueAction(action);
        
    },
    
    load_prvs : function(component, event, helper){
        var pos_val = component.get("v.pos");
        var qnid = component.get("v.qnid");
        var qntitle = component.get("v.qntitle");
        var optclist = component.get("v.optclist");
        var totqnlist = component.get("v.questions");
        pos_val = pos_val - 1;
        if(pos_val < 0){
            pos_val = 0;
        }
        
        console.log(totqnlist.length);

        component.set("v.qnid", totqnlist[pos_val].qnids);
        component.set("v.qntitle", totqnlist[pos_val].qndesc);
        component.set("v.optclist", totqnlist[pos_val].optlist);
        
        
        component.set("v.pos",pos_val);
    },
    
    load_next : function(component, event, helper){
        
        var pos_val = component.get("v.pos");
        var qnid = component.get("v.qnid");
        var qntitle = component.get("v.qntitle");
        var optclist = component.get("v.optclist");
        var totqnlist = component.get("v.questions");
        pos_val = pos_val + 1;
        
        if(pos_val > (totqnlist.length - 1)){
            pos_val = totqnlist.length-1;
        }
        
        console.log(totqnlist.length);

        component.set("v.qnid", totqnlist[pos_val].qnids);
        component.set("v.qntitle", totqnlist[pos_val].qndesc);
        component.set("v.optclist", totqnlist[pos_val].optlist);
        
        
        component.set("v.pos",pos_val);
        
        //$A.get('e.force:refreshView').fire();
    },
    
    load_first : function(component, event, helper){
        
        var pos_val = component.get("v.pos");
        var qnid = component.get("v.qnid");
        var qntitle = component.get("v.qntitle");
        var optclist = component.get("v.optclist");
        var totqnlist = component.get("v.questions");
        
        /*if(pos_val > (totqnlist.length - 1)){
            pos_val = totqnlist.length;
        }*/
        
        console.log(totqnlist.length);

        component.set("v.qnid", totqnlist[0].qnids);
        component.set("v.qntitle", totqnlist[0].qndesc);
        component.set("v.optclist", totqnlist[0].optlist);
        
        //pos_val = pos_val + 1;
        component.set("v.pos", 0);
    }
})