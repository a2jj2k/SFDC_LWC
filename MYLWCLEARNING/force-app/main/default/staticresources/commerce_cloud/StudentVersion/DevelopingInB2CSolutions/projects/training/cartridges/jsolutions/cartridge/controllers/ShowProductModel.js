'use strict';

/** @module controllers/ShowProduct */

/* Script Modules */
var guard = require('storefront_controllers/cartridge/scripts/guard');

function start() {
	var ISML = require('dw/template/ISML');
	
	var pid = request.httpParameterMap.pid.stringValue; 
    
    //Model call
    var myModel = require('*/cartridge/scripts/myProduct');
        
    //var map = request.getHttpParameters(); //check if parameter used
    
    //if (map.containsKey("pid"))  //check if parameter used
    //{ 
        
   	var productResult=myProduct.getProduct(pid); // Model call   
   
   	if (productResult != null)
       {
   			ISML.renderTemplate('product', {myProduct:productResult} ); 
       }
    else
       {
    		ISML.renderTemplate('productnotfound', {Parameter:pid} );;
       }
   /* }
    else{ // parameter was not used
    	response.setContentType('text/html');
        response.getWriter().println('<h1>Incorrect parameter!</h1>');
    }*/
}
      	
exports.Start = guard.ensure(['get'], start);

