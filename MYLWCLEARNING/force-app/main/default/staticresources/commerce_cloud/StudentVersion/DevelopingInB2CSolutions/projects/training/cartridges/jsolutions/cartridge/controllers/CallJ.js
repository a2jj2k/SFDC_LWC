
var ISML = require('dw/template/ISML');

var guard = require('storefront_controllers/cartridge/scripts/guard');


function start() {

	var parameterMap = request.httpParameterMap.param.stringValue; 

	if(parameterMap != null)
		ISML.renderTemplate('notEmpty', {Parameter : parameterMap});      
		
	else    
		ISML.renderTemplate('empty');
}
exports.Start = guard.ensure(['get'], start);