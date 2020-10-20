'use strict';

/** @module controllers/Newsletter */

var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');

function start() {
  
    var newsletterForm = session.forms.newsletter;
    newsletterForm.clearFormElement();

               ISML.renderTemplate('newsletter/newslettersignup', {
                        ContinueURL : dw.web.URLUtils.https('NewsletterJ-HandleForm')
                });
}

/**
 * The form handler.
 */
function handleForm() {
	var s = session;
	var r = request;
	var c = customer;

    var TriggeredAction = request.triggeredFormAction;
    var newsletterForm = session.forms.newsletter; 
    
    if (TriggeredAction && TriggeredAction.formId == 'subscribe') //Any valid FormAction ?
    {    
   		ISML.renderTemplate('newsletter/newslettersuccessJ');
    	  
    }
  //Check other actions..
    else //FormAction validation error -> Show Form again!
    	{
        ISML.renderTemplate('newsletter/newslettersignup', {
                ContinueURL : dw.web.URLUtils.https('NewsletterJ-HandleForm')
               });
        }
}
exports.Start = guard.ensure(['get','https'], start);
exports.HandleForm = guard.ensure(['https'], handleForm);

