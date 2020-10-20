({
    doInit : function(component, event, helper) {
        var pageReference = component.get('v.pageReference');
        //console.log("inside do init");
        if(pageReference){
            //console.log("inside do init****if");
            var state = pageReference.state;
            component.set('v.itemId', state.c__itemId); //a0H2v00000dWuTrEAK //state.beerId
            //console.log("State beer id:"+state.beerId);
            component.find("recordViewer").reloadRecord();
        }
        component.find("newRecordCreator").getNewRecord(
            "Product_Order__c", 
            null,      
            false,    
            $A.getCallback(function() {
                var rec = component.get("v.newRecordObject");
                var error = component.get("v.newRecordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                }
                else {
                    console.log("Record template initialized: " + rec.sobjectType);
                }
            })
        );
    },
    handleSubmit : function(component, event, helper) {
        //alert("hiii inside handle submit");
        var beerRecord = component.get('v.simpleRecord');
        console.log('beerRecord Price', beerRecord.Price__c);
        var quantity = component.get('v.itemOrder.Order_Quantity__c');
        console.log('Ordered quantity ', quantity);
        var totalPrice = parseInt(beerRecord.Price__c)*parseInt(quantity);
        console.log(' totalPrice ', totalPrice);
        var isValid = helper.validateForm(component, event, helper);
        console.log("isValid:"+isValid);
        component.set('v.itemOrder.Street__c', component.get('v.itemOrder.Street__c'));
        component.set('v.itemOrder.City__c', component.get('v.itemOrder.City__c'));
        component.set('v.itemOrder.Country__c', component.get('v.itemOrder.Country__c'));
        component.set('v.itemOrder.State__c', component.get('v.itemOrder.State__c'));
        component.set('v.itemOrder.Postal_Code__c', component.get('v.itemOrder.Postal_Code__c'));
        /*if(component.get("v.beerOrder.Billing_Same_as_Shipping__c")){
            component.set('v.beerOrder.Billing_Street__c', component.get('v.beerOrder.Shipping_Street__c'));
            component.set('v.beerOrder.Billing_City__c', component.get('v.beerOrder.Shipping_City__c'));
            component.set('v.beerOrder.Billing_Country__c', component.get('v.beerOrder.Shipping_Country__c'));
            component.set('v.beerOrder.Billing_State__c', component.get('v.beerOrder.Shipping_State__c'));
            component.set('v.beerOrder.Billing_Postal_Code__c', component.get('v.beerOrder.Shipping_Postal_Code__c'));
        }*/
       	if(!isValid)
            return;
        var userId = $A.get("$SObjectType.CurrentUser.Id");
        //alert(userId);
        component.set("v.itemOrder.Product__c", component.get("v.itemId"));
        component.set("v.itemOrder.Ordered_By__c", userId); 
        component.set("v.itemOrder.Order_Amount__c", parseInt(totalPrice));
        component.find("newRecordCreator").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Order Placed",
                    "message": "Your Order has been successfully placed. - " + saveResult.recordId,
                    "type" : "success"
                });
                
                console.log("Order id before page navigation "+ saveResult.recordId);
                resultsToast.fire();
                
                var pageReference = component.find("navigation");
        		var pageReferenceNav = {
            	type: "standard__component",
            	attributes: {
                		"componentName": "c__ItemOrderDetail"
            		},
            	state:{
                		"c__orderId": saveResult.recordId
            		}
        		};
        		//console.log("**********"+component.get('v.beerId'));
        		 console.log("Just before navigation");
				pageReference.navigate(pageReferenceNav);
                
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving contact, error: ' + 
                            JSON.stringify(saveResult.error));
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Error While Placing Your Order.",
                    "message": JSON.stringify(saveResult.error),
                    "type" : "success"
                });
                resultsToast.fire();
            } else {
                console.log('Unknown problem, state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    },
})