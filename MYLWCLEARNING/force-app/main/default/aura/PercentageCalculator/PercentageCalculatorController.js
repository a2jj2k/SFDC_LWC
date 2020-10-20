({
	doClick : function(component, event, helper) {
		alert(component.isValid());
        alert(component.getName());
        alert(component.get('v.test2'));
        //component.set('v.test2', "KIA");//setting values to the attributes in lightning
        //ss

        /* getting value from a component starts */
        var numbComp = component.find('numb1');
        alert(numbComp.get('v.value'));
         /* getting value from a component ends */
        
        
         /* setting value to a component starts */
        numbComp.set('v.value', 6946);
         /* setting value to a component starends */
	}
})