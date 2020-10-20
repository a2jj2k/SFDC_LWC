exports.getProduct = function (pid)
{	
	var ProductMgr = require ('dw/catalog/ProductMgr');
	var Product = ProductMgr.getProduct(pid);
	
    return Product;
}
