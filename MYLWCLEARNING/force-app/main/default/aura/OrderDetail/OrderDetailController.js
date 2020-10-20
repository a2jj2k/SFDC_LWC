({
	doInit : function(component, event, helper) {
        console.log("order details beer id inside doinit");
		var pageRef = component.get('v.pageReference');
        if(pageRef){
            var state = pageRef.state;
            component.set('v.orderId', state.c__orderId);
            console.log("order details beer id "+state.c__orderId);
            component.find('recordViewer').reloadRecord();
        }
	}
})