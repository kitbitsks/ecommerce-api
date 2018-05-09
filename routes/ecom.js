const express = require('express');
const router = express.Router();
const ecomController = require("./../controllers/ecomController");
const appConfig = require("./../config/appConfig")

module.exports.setRouter = function(app){
	let baseUrl = appConfig.apiVersion+'/ecomapp';
    
    app.post(baseUrl+'/addNewProduct', ecomController.CreateProduct);
    /**
	 * @api {post} /api/v1/ecomapp/addNewProduct Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} productName productName of the product passed as a body parameter
	 * @apiParam {String} productDescription productDescription of the product passed as a body parameter
	 * @apiParam {String} productCategory productCategory of the product passed as a body parameter
	 * @apiParam {number} productWarrantyYears productWarrantyYears of the product passed as a body parameter
	 * @apiParam {Date} productManufacturedDate productManufacturedDate of the product passed as a body parameter
	 * @apiParam {Date} productDetailsAddedOn productDetailsAddedOn of the product passed as a body parameter.(It is an optional body parameter and has default value)
	 * @apiParam {boolean} productAllowedForExchange productAllowedForExchange of the product passed as a body parameter.(It is an optional body parameter and has default value)
	 * @apiParam {number} DiscountPercentGiven DiscountPercentGiven of the product passed as a body parameter.(It is an optional body parameter and has default value)
	 * @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Product created successfully",
        "status": 200,
        "data": [
                    {
                        "productIsInCart": boolean,
                        "productDiscountPercentGiven": number,
                        "productAllowedForExchange": boolean,
                        "productDetailsAddedOn": "Date",
                        "_id": "string",
                        "productId": "string",
                        "productName": "string",
                        "productDescription": "string",
                        "productCategory": "string",
                        "productWarrantyYears": number,
                        "productManufacturedDate": "date",
                        "__v": number
                    }
                ]
            }
        }
    }
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */
    
    app.get(baseUrl+'/all',ecomController.getAllProductDetails);
    /**
	 * @api {get} /api/v1/ecomapp/all Get all Product Details
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
           "error": false,
           "message": "All Product details found",
           "status": 200,
           "data": [
                        {
                            "productIsInCart": boolean,
                            "productDiscountPercentGiven": number,
                            "productAllowedForExchange": boolean,
                            "productId": "string",
                            "productName": "string",
                            "productDescription": "string",
                            "productCategory": "string",
                            "productWarrantyYears": number,
                            "productManufacturedDate": "Date",
                            "productDetailsAddedOn": "Date"
                            "__v": 0
                        }
                    ]
                }
            }
        }
    }
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
        "message": "No Product Found",
        "status": 404,
        "data": null
	   }
	 */

    app.get(baseUrl+'/:productId/show',ecomController.getSingleProductDetails);
    /**
	 * @api {get} /api/v1/ecomapp/:productId/show Get a single product Information
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Product found Successfully",
        "status": 200,
        "data": {
                    "productIsInCart": boolean,
                    "productDiscountPercentGiven": number,
                    "productAllowedForExchange": boolean,
                    "productDetailsAddedOn": "Date",
                    "_id": "string",
                    "productId": "string",
                    "productName": "string",
                    "productDescription": "string",
                    "productCategory": "string",
                    "productWarrantyYears": number,
                    "productManufacturedDate": "date",
                    "__v": number
        }
    }
}


	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    

    app.post(baseUrl+'/:productId/delete', ecomController.deleteProduct);
    /**
	 * @api {post} /api/v1/ecomapp/:productId/delete Delete product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
            "error": false,
            "message": "Product deleted Successfull",
            "status": 200
     }
    }
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl+'/:productId/addToCart', ecomController.addToCart);
    /**
	 * @api {put} /api/v1/ecomapp/:productId/addToCart  add product to cart by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} productId productId of the product should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Product added to cart successfully",
        "status": 200,
        "data": {
                    "productIsInCart": true,
                    "productDiscountPercentGiven": number,
                    "productAllowedForExchange": boolean,
                    "productDetailsAddedOn": "Date",
                    "_id": "string",
                    "productId": "string",
                    "productName": "string",
                    "productDescription": "string",
                    "productCategory": "string",
                    "productWarrantyYears": number,
                    "productManufacturedDate": "date",
                    "__v": number
        }
    }
}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl+'/:productId/removeFromCart', ecomController.removeFromCart);
   /**
	 * @api {put} /api/v1/ecomapp/:productId/removeFromCart  remove product from cart by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} productId productId of the product should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Product removed from cart successfully",
        "status": 200,
        "data": {
                    "productIsInCart": false,
                    "productDiscountPercentGiven": number,
                    "productAllowedForExchange": boolean,
                    "productDetailsAddedOn": "Date",
                    "_id": "string",
                    "productId": "string",
                    "productName": "string",
                    "productDescription": "string",
                    "productCategory": "string",
                    "productWarrantyYears": number,
                    "productManufacturedDate": "date",
                    "__v": number
        }
    }
}

	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */

    app.put(baseUrl+'/:productId/edit',ecomController.editProduct);
    /**
	 * @api {put} /api/v1/ecomapp/:productId/edit Edit product by productId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} productId productId of the product should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
        "error": false,
        "message": "Product Edited successfully",
        "status": 200,
        "data": {
                    "n": 1,
                    "nModified": 1,
                    "ok": 1
                }
}
	    
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
    
    
}
	 */
}