({
	doInit : function(component, event, helper) {
        
        var action = component.get("c.getAcntsforDemo"); //getting object of the action class
         
        action.setCallback(this, function(a) {
        	var state = a.getState();
             console.log("state  " + state);
            if (state === "SUCCESS") {
            	var slist = a.getReturnValue();
               	component.set("v.accList",slist);
                }else{
                    alert("Failed");
         		}
        	});
         
             $A.enqueueAction(action); //send request to the server
        
    }
})