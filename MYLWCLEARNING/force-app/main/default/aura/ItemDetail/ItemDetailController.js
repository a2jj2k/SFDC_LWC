({
	doOrder : function(component, event, helper) {
        
        var pageReference = component.find("navigation");
        var pageReferenceNav = {
            type: "standard__component",
            attributes: {
                "componentName": "c__CreateItemOrder"
            },
            state:{
                "c__itemId": component.get('v.itemId'),
                "c__beerName": component.get('v.beerName')
            }
        };
        //console.log("**********"+component.get('v.beerId'));
		pageReference.navigate(pageReferenceNav);
	}
})