define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/ecomapp/addNewProduct",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productName",
            "description": "<p>productName of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productDescription",
            "description": "<p>productDescription of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productCategory",
            "description": "<p>productCategory of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "productWarrantyYears",
            "description": "<p>productWarrantyYears of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "productManufacturedDate",
            "description": "<p>productManufacturedDate of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "productDetailsAddedOn",
            "description": "<p>productDetailsAddedOn of the product passed as a body parameter.(It is an optional body parameter and has default value)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "productAllowedForExchange",
            "description": "<p>productAllowedForExchange of the product passed as a body parameter.(It is an optional body parameter and has default value)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "DiscountPercentGiven",
            "description": "<p>DiscountPercentGiven of the product passed as a body parameter.(It is an optional body parameter and has default value)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Product created successfully\",\n        \"status\": 200,\n        \"data\": [\n                    {\n                        \"productIsInCart\": boolean,\n                        \"productDiscountPercentGiven\": number,\n                        \"productAllowedForExchange\": boolean,\n                        \"productDetailsAddedOn\": \"Date\",\n                        \"_id\": \"string\",\n                        \"productId\": \"string\",\n                        \"productName\": \"string\",\n                        \"productDescription\": \"string\",\n                        \"productCategory\": \"string\",\n                        \"productWarrantyYears\": number,\n                        \"productManufacturedDate\": \"date\",\n                        \"__v\": number\n                    }\n                ]\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "create",
    "name": "PostApiV1EcomappAddnewproduct"
  },
  {
    "type": "post",
    "url": "/api/v1/ecomapp/:productId/delete",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n            \"error\": false,\n            \"message\": \"Product deleted Successfull\",\n            \"status\": 200\n     }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "delete",
    "name": "PostApiV1EcomappProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/ecomapp/:productId/addToCart",
    "title": "add product to cart by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Product added to cart successfully\",\n        \"status\": 200,\n        \"data\": {\n                    \"productIsInCart\": true,\n                    \"productDiscountPercentGiven\": number,\n                    \"productAllowedForExchange\": boolean,\n                    \"productDetailsAddedOn\": \"Date\",\n                    \"_id\": \"string\",\n                    \"productId\": \"string\",\n                    \"productName\": \"string\",\n                    \"productDescription\": \"string\",\n                    \"productCategory\": \"string\",\n                    \"productWarrantyYears\": number,\n                    \"productManufacturedDate\": \"date\",\n                    \"__v\": number\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcomappProductidAddtocart"
  },
  {
    "type": "put",
    "url": "/api/v1/ecomapp/:productId/edit",
    "title": "Edit product by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Product Edited successfully\",\n        \"status\": 200,\n        \"data\": {\n                    \"n\": 1,\n                    \"nModified\": 1,\n                    \"ok\": 1\n                }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n    \n    \n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcomappProductidEdit"
  },
  {
    "type": "put",
    "url": "/api/v1/ecomapp/:productId/removeFromCart",
    "title": "remove product from cart by productId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the product should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Product removed from cart successfully\",\n        \"status\": 200,\n        \"data\": {\n                    \"productIsInCart\": false,\n                    \"productDiscountPercentGiven\": number,\n                    \"productAllowedForExchange\": boolean,\n                    \"productDetailsAddedOn\": \"Date\",\n                    \"_id\": \"string\",\n                    \"productId\": \"string\",\n                    \"productName\": \"string\",\n                    \"productDescription\": \"string\",\n                    \"productCategory\": \"string\",\n                    \"productWarrantyYears\": number,\n                    \"productManufacturedDate\": \"date\",\n                    \"__v\": number\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "edit",
    "name": "PutApiV1EcomappProductidRemovefromcart"
  },
  {
    "type": "get",
    "url": "/api/v1/ecomapp/all",
    "title": "Get all Product Details",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n           \"error\": false,\n           \"message\": \"All Product details found\",\n           \"status\": 200,\n           \"data\": [\n                        {\n                            \"productIsInCart\": boolean,\n                            \"productDiscountPercentGiven\": number,\n                            \"productAllowedForExchange\": boolean,\n                            \"productId\": \"string\",\n                            \"productName\": \"string\",\n                            \"productDescription\": \"string\",\n                            \"productCategory\": \"string\",\n                            \"productWarrantyYears\": number,\n                            \"productManufacturedDate\": \"Date\",\n                            \"productDetailsAddedOn\": \"Date\"\n                            \"__v\": 0\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n        \"message\": \"No Product Found\",\n        \"status\": 404,\n        \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "read",
    "name": "GetApiV1EcomappAll"
  },
  {
    "type": "get",
    "url": "/api/v1/ecomapp/:productId/show",
    "title": "Get a single product Information",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n        \"error\": false,\n        \"message\": \"Product found Successfully\",\n        \"status\": 200,\n        \"data\": {\n                    \"productIsInCart\": boolean,\n                    \"productDiscountPercentGiven\": number,\n                    \"productAllowedForExchange\": boolean,\n                    \"productDetailsAddedOn\": \"Date\",\n                    \"_id\": \"string\",\n                    \"productId\": \"string\",\n                    \"productName\": \"string\",\n                    \"productDescription\": \"string\",\n                    \"productCategory\": \"string\",\n                    \"productWarrantyYears\": number,\n                    \"productManufacturedDate\": \"date\",\n                    \"__v\": number\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/ecom.js",
    "groupTitle": "read",
    "name": "GetApiV1EcomappProductidShow"
  }
] });
