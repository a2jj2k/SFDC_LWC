
'use strict';

var guard = require('storefront_controllers/cartridge/scripts/guard');
var newsletterForm = session.forms.newsletter; // name the xml!
var ISML = require('dw/template/ISML');

function start() {
	
	newsletterForm.clearFormElement();  // initialization
	ISML.renderTemplate('newsletter/newslettersignup',{
		ContinueURL: dw.web.URLUtils.https('NewsletterJV2WithoutModel-HandleForm')
	});
		
}

function handleForm(){  // form gets validated here
	var s = session;
	var r = request;
	var c = customer;
	
	var Transaction = require('dw/system/Transaction');
	var submitButton = request.triggeredFormAction;
	if (submitButton && submitButton.formId == 'subscribe')
		{
		try {
			var CustomObjectMgr = require('dw/object/CustomObjectMgr');
			
			Transaction.wrap(function() {
				var COinstance = CustomObjectMgr.createCustomObject("NewsletterSubscription", newsletterForm.email.value);
				COinstance.custom.firstName = newsletterForm.fname.value;
				COinstance.custom.lastName = newsletterForm.lname.value;
			});		
			
			ISML.renderTemplate('newsletter/newslettersuccess');
		}
		catch(e){
			ISML.renderTemplate('newsletter/newslettererror');				
		}
	}
	// check for any other form actions
	// otherwise...
	else{
		ISML.renderTemplate('newsletter/newslettersignup',{
			ContinueURL: dw.web.URLUtils.https('NewsletterJV2WithoutModel-HandleForm')
			});	
	}
}
exports.Start = guard.ensure([ 'get'], start);
exports.HandleForm = guard.ensure([], handleForm);