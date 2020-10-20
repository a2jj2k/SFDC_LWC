
exports.CO = function (newsletterForm)
{
	var CustomObjectMgr = require('dw/object/CustomObjectMgr');
	var COinstance = CustomObjectMgr.createCustomObject("NewsletterSubscription", newsletterForm.email.value);
	COinstance.custom.firstName = newsletterForm.fname.value;
	COinstance.custom.lastName = newsletterForm.lname.value;

   return;
}
