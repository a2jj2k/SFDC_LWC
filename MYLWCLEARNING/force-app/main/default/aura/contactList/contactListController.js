({
	doInit : function(component, event, helper) {
		
        var action = component.get('c.getContactList'); //getting object of the action class
      
        
        action.setParams({
            accountId : component.get('v.recordId'),
        });
        
        
        action.setCallback(this, function(response){
			var responseValue = response.getReturnValue();
            console.log('responseValue',responseValue); //to print values in console
            component.set('v.contactList', responseValue)
        }, 'SUCCESS');
     

        $A.enqueueAction(action, false);//send request to the server
	},
    
    doRedirect : function(component, event, helper){
        var eventSource = event.getSource();
        var id = eventSource.get('v.name');
        //alert(id);
        
        var navEvt = $A.get("e.force:navigateToSObject");
    	navEvt.setParams({
      	"recordId": id,
      	"slideDevName": "detail"
    	});
    	navEvt.fire();
        
    },
})