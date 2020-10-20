

var guard = require('storefront_controllers/cartridge/scripts/guard');

function start() {
	var ISML = require('dw/template/ISML');
	var pm = require('dw/catalog/ProductMgr'); 
	
	var pid = request.httpParameterMap.pid.stringValue; 
    
    //API call
    var productResult=pm.getProduct(pid);
    
    
    //Use a Pipelet:
    //var GetProductPipelet = new dw.system.Pipelet('GetProduct').execute({
    //    ProductID : pid
    //});
    //var productResult=GetProductPipelet.myProduct;
    //var map = request.getHttpParameters();  //check if parameter used
    
    //if (map.containsKey("pid")){
       
   	if (productResult != null)
       {
   			ISML.renderTemplate('product', {myProduct:productResult} ); 
       }
    else
       {
    		ISML.renderTemplate('productnotfound', {Parameter:pid} );
       }
    /*}
    else{
    	response.setContentType('text/html');
        response.getWriter().println('<h1>Incorrect parameter!</h1>');
    }*/
}
      	
exports.Start = guard.ensure(['get'], start);

