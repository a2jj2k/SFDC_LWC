
'use strict';

var guard = require('storefront_controllers/cartridge/scripts/guard');
var newsletterForm = session.forms.newsletter; // name the xml!
var ISML = require('dw/template/ISML');

function start() {
	
	newsletterForm.clearFormElement();  // initialization
	ISML.renderTemplate('newsletter/newslettersignup',{
		ContinueURL: dw.web.URLUtils.https('NewsletterJV3-HandleForm')
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
				//Transaction.wrap(function() {
			Transaction.begin();
				var model = require('*/cartridge/scripts/mymodel');	
				var result = model.CO(newsletterForm);				
			//});		
			Transaction.commit();
			ISML.renderTemplate('newsletter/newslettersuccess');
		}
		catch(e){
			newsletterForm.email.invalidateFormElement();
			Transaction.rollback();
			ISML.renderTemplate('newsletter/newslettersignup',{
				ContinueURL: dw.web.URLUtils.https('NewsletterJV3-HandleForm')
			});			
			//ISML.renderTemplate('newsletter/newslettererror');				
		}
	}
	// check for any other form actions
	// otherwise...
	else{
		ISML.renderTemplate('newsletter/newslettersignup',{
			ContinueURL: dw.web.URLUtils.https('NewsletterJV3-HandleForm')
			});	
	}
}
exports.Start = guard.ensure([ 'get'], start);
exports.HandleForm = guard.ensure([], handleForm);