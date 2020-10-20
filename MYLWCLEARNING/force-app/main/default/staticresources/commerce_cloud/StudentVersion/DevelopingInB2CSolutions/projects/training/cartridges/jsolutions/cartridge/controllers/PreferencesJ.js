'use strict';

/** @module controllers/EditPreferences */

var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');

function start() {
	var preferencesForm = session.forms.preferences;
    preferencesForm.clearFormElement();
    preferencesForm.copyFrom(customer.profile);  //updateFormWithObject and binds the object to this form
               ISML.renderTemplate('editpreferences.isml', {	
                        ContinueURL : dw.web.URLUtils.https('PreferencesJ-HandleForm')
                });
}

/**  * The form handler. */
function handleForm() {

    var TriggeredAction = request.triggeredFormAction;
    var preferencesForm = session.forms.preferences;
    var URLUtils = require('dw/web/URLUtils');
 	var Transaction = require('dw/system/Transaction');   
 	
 	Transaction.wrap(function() {  //implicit transaction
		//Explicit
		//Transaction.begin();
		
		//Implicit
		//Transaction.wrap(function() {
		//preferencesForm.copyTo(customer.profile);
	    //});
	    
		//Transaction.commit();
		
		
		//	preferencesForm.copyTo(customer.profile);  //updateObjectWithForm
 		//  you can use the line above but since the object is already bound, you can use
 		    preferencesForm.accept();
         
       });
 
       response.redirect(URLUtils.https('Account-Show'));
}

/*
 * Web exposed methods
 */
/** @see module:controllers/SendToFriend*Start */
exports.Start = guard.ensure(['get', 'https', 'loggedIn'], start);
exports.HandleForm = guard.ensure(['https', 'loggedIn'], handleForm);
