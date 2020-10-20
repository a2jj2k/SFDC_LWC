({
	doSearch : function(component, event, helper) {
		var componentEvent = component.getEvent('ItemEvent');
        var searchParam = component.find('searchInput').get('v.value');
        //console.log("hiiii");
        //console.log(searchParam);
        componentEvent.setParams({
            searchText : searchParam
        });
		componentEvent.fire();
	}
})