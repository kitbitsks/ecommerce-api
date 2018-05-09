const mongoose = require('mongoose');
const EcomAppModel = mongoose.model('EcomApp')
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib')

let getAllProductDetails = (req, res) => {
    EcomAppModel.find()
    .select('-_v -_id')
    .lean()
    .exec((err,result)=>{
        if(err){
            console.log(err)
            logger.error(err.message,'Ecom Controller:getAllProductDetails',10)
            let apiResponse = response.generate(true,'error fetching product details',404, null)
            res.send(apiResponse)
        }
        else if(check.isEmpty(result)){
            logger.info('No Product Found', 'Ecom Controller:getAllProductDetails')
            let apiResponse = response.generate(true,'No Product Found',404, null)
            res.send(apiResponse)
        }
        else{
            let apiResponse = response.generate(false,'All Product details found',200,result)
            res.send(apiResponse)
        }
    })
}
// end get all details


//single Product detail by product id
let getSingleProductDetails = (req,res) =>{
    
    if(check.isEmpty(req.params.productId)){
        console.log('Product Id is missing..')
        let apiResponse = response.generate(true,'ProductId missing',403,null)
        res.send(apiResponse)
    }
    else{

        EcomAppModel.findOne({'productId':req.params.productId },(err,result)=>{
            if(err){
                console.log('Error occurred')
                logger.error(`Error Occurred : ${err}`, 'Database',10)
                let apiResponse = response.generate(true,'Error Occurred',500, null)
                res.send(apiResponse)
            }
            else if(check.isEmpty(result)) {
                console.log('Product not found')
                let apiResponse = response.generate(true,'Product Not found',404,null)
                res.send(apiResponse)
            }
            else{
                logger.info("Product found Successfully","getSingleProductDetails",5)
                let apiResponse = response.generate(false,"Product found Successfully",200,result)
                res.send(apiResponse)
            }
        })
    }
}
//end single product detail

//Adding or Creating Product
let CreateProduct = (req,res) =>{
    let today = Date.now()
    let prodId = shortid.generate()
    
    let newEcomApp = new EcomAppModel({
        productId : prodId,
        productName : req.body.productName,
        productDescription : req.body.productDescription,
        productCategory : req.body.productCategory,
        productDiscountPercentGiven : req.body.productDiscountPercentGiven,
        productAllowedForExchange : req.body.productAllowedForExchange,
        productWarrantyYears : req.body.productWarrantyYears,
        productManufacturedDate : req.body.productManufacturedDate,
        productDetailsAddedOn : req.body.productDetailsAddedOn
    }) 
    if(check.isEmpty(req.body.productName) || check.isEmpty(req.body.productDescription) || check.isEmpty(req.body.productCategory) || check.isEmpty(req.body.productWarrantyYears) || check.isEmpty(req.body.productManufacturedDate))
        {
            console.log('Required parameters are missing')
            let apiResponse = response.generate(true,'required parameters are missing',403,null)
            res.send(apiResponse)
        }
    else{
    newEcomApp.save((err, result) => {
        if (err) {
            console.log('Error Occured.')
            logger.error(`Error Occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Error Occured.', 500, null)
            res.send(apiResponse)
        } else {
            console.log('Product added successfully')
            let apiResponse = response.generate(false, 'Product created successfully', 200, result)
            res.send(apiResponse)
        }
    })
}
}
//end adding product

//deleting a product
let deleteProduct = (req,res) =>{
    if(check.isEmpty(req.params.productId)) {
        console.log('Product Id should be passed')
        let apiResponse = response.generate(true,'productId is missing', 403, null)
        res.send(apiResponse)
    }
    else{
        EcomAppModel.findOneAndRemove({'productId' : req.params.productId}, (err,result)=>{
           if(err){
               console.log('Error Occured')
               logger.error(`Error Occured : ${err}`,'Database',10)
               let apiResponse = response.generate(true,'Error Occurred', 500, null)
               res.send(apiResponse)
           }
           else if(check.isEmpty(result)){
               console.log('Product not found')
               let apiResponse = response.generate(true,'Product not found',404, null)
               res.send(apiResponse)
           }
           else
           {
               console.log('Product deletion Successfull')
               let apiResponse = response.generate(false,'Product deleted Successfull',200)
               res.send(apiResponse)
           } 
        })
    }
}
//end delete product

//addToCart 
let addToCart = (req,res) =>{
    if(check.isEmpty(req.params.productId)){
        console.log('Product Id should be passed')
        let apiResponse = response.generate(true,'ProductId is missing',403,null)
        res.send(apiResponse)
    }
    else{
        EcomAppModel.findOneAndUpdate({'productId': req.params.productId},{$set: {"productIsInCart" : true}},{new:true}).exec((err,result)=>{
            if(err){
                console.log('Error occured')
                logger.error(`Error Occurred : ${err}`,'Database',10)
                let apiResponse = response.generate(true,'Error Occurred', 500, null)
                res.send(apiResponse)
            }
            else if(check.isEmpty(result)){
                console.log('Product not found')
                let apiResponse = response.generate(true,'Product not found',404,null)
                res.send(apiResponse)
            }
            else{
                console.log('Product added to cart successfully !')
                let apiResponse = response.generate(false,'Product added to cart successfully',200,result)
                res.send(apiResponse)
            }
        })
    }
}//end addtoCart

//removeFromCart
let removeFromCart = (req,res) =>{
    if(check.isEmpty(req.params.productId)){
        console.log('Product Id should be passed')
        let apiResponse = response.generate(true,'ProductId is missing',403,null)
        res.send(apiResponse)
    }
    else{
        EcomAppModel.findOneAndUpdate({'productId': req.params.productId},{$set:{"productIsInCart":false}},{ new : true}).exec((err,result)=>{
            if(err){
                console.log('Error occured')
                logger.error(`Error Occurred : ${err}`,'Database',10)
                let apiResponse = response.generate(true,'Error Occurred', 500, null)
                res.send(apiResponse)
            }
            else if(check.isEmpty(result)){
                console.log('Product not found')
                let apiResponse = response.generate(true,'Product not found',404,null)
                res.send(apiResponse)
            }
            else{
                console.log('Product removed from cart successfully !')
                let apiResponse = response.generate(false,'Product removed from cart successfully',200,result)
                res.send(apiResponse)
            }
        })
    }
}
//end removeFromCart

//editProductDetails
let editProduct = (req,res) =>{
    if(check.isEmpty(req.params.productId)){
        console.log('ProductId should be passed')
        let apiResponse = response.generate(true,'productId is missing', 403, null)
        res.send(apiResponse)
    }
    else{
        let updatedDetails = req.body; 
        console.log(updatedDetails);
        EcomAppModel.update({'productId': req.params.productId},updatedDetails,{multi:true}).exec((err,result)=>{
            if(err){
                console.log('Error Occured')
                logger.error(`Error Occured : ${err}`,'Database',10)
                let apiResponse = response.generate(true,'Error Occured',500,null)
                res.send(apiResponse);
            }
            else if(check.isEmpty(result)){
                console.log('Product not Found')
                let apiResponse = response.generate(true,'Product Not found',404, null)
                res.send(apiResponse)
            }
            else{
                console.log('Product edited successfully')
                let apiResponse = response.generate(false,'Product Edited successfully',200,result)
                res.send(apiResponse)
            }
        })
    }
}
//end editing product

module.exports = {
    getAllProductDetails : getAllProductDetails,
    getSingleProductDetails :getSingleProductDetails,
    CreateProduct : CreateProduct,
    deleteProduct : deleteProduct,
    addToCart : addToCart,
    removeFromCart : removeFromCart,
    editProduct : editProduct
}
