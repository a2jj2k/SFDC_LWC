({
	disp1 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '1';
        component.set("v.disp",d);
	},
    
    disp2 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '2';
        component.set("v.disp",d);
	},
    
    disp3 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '3';
        component.set("v.disp",d);
	},
    
    disp4 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '4';
        component.set("v.disp",d);
	},
    
    disp5 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '5';
        component.set("v.disp",d);
	},
    
    disp6 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '6';
        component.set("v.disp",d);
	},
    
    disp7 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '7';
        component.set("v.disp",d);
	},
    
    disp8 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '8';
        component.set("v.disp",d);
	},
    
    disp9 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '9';
        component.set("v.disp",d);
	},
    
    disp0 : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '0';
        component.set("v.disp",d);
	},
    
    point : function(component, event, helper) {
		var d = component.get("v.disp");
        if(d=='0'){
            d='';
        }
        d = d + '.';
        component.set("v.disp",d);
	},
    
    clear : function(component, event, helper) {
		var d = component.get("v.disp");
        d = '';
        component.set("v.disp",d);
        component.set("v.num1",'');
        component.set("v.num2",'');
        component.set("v.opr",'');
        //component.set("v.disp",d);
        //set all attributes to nothing
	},
    
    add : function(component, event, helper) {
		var d = component.get("v.disp");
        component.set("v.num1",d);
        d = '';
        component.set("v.disp",d);
        component.set("v.opr",'+');
	},
    
    sub : function(component, event, helper) {
		var d = component.get("v.disp");
        component.set("v.num1",d);
        d = '';
        component.set("v.disp",d);
        component.set("v.opr",'-');
	},
    
    mul : function(component, event, helper) {
		var d = component.get("v.disp");
        component.set("v.num1",d);
        d = '';
        component.set("v.disp",d);
        component.set("v.opr",'*');
	},
    
    div : function(component, event, helper) {
		var d = component.get("v.disp");
        component.set("v.num1",d);
        d = '';
        component.set("v.disp",d);
        component.set("v.opr",'/');
	},
    
    equals : function(component, event, helper) {
		var d = component.get("v.disp");
        //component.set("v.num1",d);
         var num1 = component.get("v.num1");
         var num2 = d;
        var result = 0;
         var opr = component.get("v.opr");
        if(opr == '+'){
            result = parseInt(num1) + parseInt(num2);
            component.set("v.disp",result.toString()); 
        }else if(opr == '-'){
            result = parseInt(num1) - parseInt(num2);
            component.set("v.disp",result.toString());
        }else if(opr == '*'){
            result = parseInt(num1) * parseInt(num2);
            component.set("v.disp",result.toString());
        }else if(opr == '/'){
            if(num2 == '0'){
                component.set("v.disp",'Synatx Error');
            }else{
                result = parseInt(num1) / parseInt(num2);
            	component.set("v.disp",result.toString());
            }
        }else{
            component.set("v.disp",'Synatx Error');
        }
	}
})