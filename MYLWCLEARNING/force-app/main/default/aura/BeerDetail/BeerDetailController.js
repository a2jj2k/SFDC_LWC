({
	doOrder : function(component, event, helper) {
        
        var pageReference = component.find("navigation");
        var pageReferenceNav = {
            type: "standard__component",
            attributes: {
                "componentName": "c__CreateBeerOrder"
            },
            state:{
                "c__beerId": component.get('v.beerId'),
                "c__beerName": component.get('v.beerName')
            }
        };
        //console.log("**********"+component.get('v.beerId'));
		pageReference.navigate(pageReferenceNav);
	}
})