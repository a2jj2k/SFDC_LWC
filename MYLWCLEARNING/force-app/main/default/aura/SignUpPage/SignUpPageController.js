({
	signUp : function(component, event, helper) {
		var fname = component.get("v.fname");
        var lname = component.get("v.lname");
        var emailid = component.get("v.emailid");
        var pswd = component.get("v.pswd");
        var cpswd = component.get("v.cpswd");
        var telep = component.get("v.telep");
        console.log("pswd: "+pswd);
        console.log("cpswd: "+cpswd);
        
        
        if (pswd == cpswd){
            var action = component.get("c.createUser");
            //alert("Pswd ok")
            action.setParams({ 
                "fname": fname,
            	"lname": lname,
            	"emailid": emailid,
            	"pswd": pswd,
            	"cpswd": cpswd,
            	"telep": telep
        		});
            
            action.setCallback(this, function(a) {
                var state = a.getState();
                console.log("state  " + state);
            	if (state === "SUCCESS") {
                    var name = a.getReturnValue();
                    console.log("name" + name);
                    if(name == true){
                        alert("success....Contact Created");
                        component.set("v.fname","");
                        component.set("v.lname","");
                        component.set("v.emailid","");
                        component.set("v.pswd","");
                        component.set("v.cpswd","");
                        component.set("v.telep","");
                    }else{
                        alert("Already Exist");
                        component.set("v.fname","");
                        component.set("v.lname","");
                        component.set("v.emailid","");
                        component.set("v.pswd","");
                        component.set("v.cpswd","");
                        component.set("v.telep","");
                    }
               		
                }else{
                    alert("Failed");
         		}
        	});
             $A.enqueueAction(action);
            
        }else{
            alert("Password Missmatch")
        }
        
        
        
	}
})