'use strict';

/* API Includes */
var URLUtils = require('dw/web/URLUtils');
var ISML = require('dw/template/ISML');

/* Script Modules */
var app = require('storefront_controllers/cartridge/scripts/app');
var guard = require('storefront_controllers/cartridge/scripts/guard');

 function start(){
     app.getForm('newsletter').clear();  //equivalent of ClearformElement	 
     app.getView({
        Action: 'subscribe',
        ContinueURL: URLUtils.https('NewsletterJWithLibraries-HandleForm')
             }).render('newsletter/newslettersignup');
 }
	 function handleForm() {          
		 var s = session;
		 var r = request;
		 var c = customer;
		 
		 var newsletterForm = app.getForm('newsletter');
		  newsletterForm.handleAction({     
			subscribe: function () {	
				app.getView().render('newsletter/newslettersuccessWithLibraries');
					return;
			},
	  
			error: function () {
				
				ISML.renderTemplate('newsletter/newslettersignup', {
		                ContinueURL : dw.web.URLUtils.https('NewsletterJWithLibraries-HandleForm')
		               });
				success = false;
			}
		   
		});
}
 
exports.Start = guard.ensure(['get'], start);
exports.HandleForm = guard.ensure([], handleForm);