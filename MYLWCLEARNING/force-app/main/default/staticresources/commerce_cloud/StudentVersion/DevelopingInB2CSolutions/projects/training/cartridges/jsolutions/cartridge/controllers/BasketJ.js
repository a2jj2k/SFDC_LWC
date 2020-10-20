

	var guard = require('storefront_controllers/cartridge/scripts/guard');
	
	function start() {
		var ISML = require('dw/template/ISML');
		//var basket:Basket = require('dw/order/Basket');
		var BasketMgr = require('dw/order/BasketMgr')
		var basket=BasketMgr.getCurrentBasket();
		 //var basketResult = new dw.system.Pipelet('GetBasket').execute({}); 
		 //var basket=basketResult.Basket;
	
		    ISML.renderTemplate(
	                         'basket.isml', {myBasket:basket}
	                        );

	}
exports.Start = guard.ensure(['https'], start);
