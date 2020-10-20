({
	showInfo : function(component, event, helper) {
		var eventSource = event.getSource();
        var itemObj = eventSource.get('v.name');
        console.log("**********");
        console.log(itemObj);
        console.log("**********");
        component.set('v.itemId', itemObj);
        
        $A.createComponent(
            "c:ItemDetail",
            {
                "itemId" : itemObj
            },
            function(itemDetails, status, errorMessage){
                if(status == 'SUCCESS'){
                    component.find('overLayLib').showCustomModal({
                        header: "Item Details",
                        body: itemDetails,
                        footer: "Footer",
                        showCloseButton: true,
                        closeCallback: function(){
                        }
                    });
                }else if(status == 'INCOMPLETE'){
                    console.log("No response from server");
                }else if(status == 'ERROR'){
                    console.log("Error : " + errorMessage);
                }
            }
        );
	}
})