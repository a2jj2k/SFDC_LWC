/**
* A hello world controller.  This file is in cartridge/controllers folder
*
* @module controllers/HelloJV2          
*/
exports.Start = function(){
	
	var ISML = require('dw/template/ISML'); 

	    ISML.renderTemplate(
	                          'hello.isml'
	                         );

};
exports.Start.public = true;   
