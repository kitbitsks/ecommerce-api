
//importing mongoose module
const mongoose = require('mongoose')
//importing Schema
const Schema = mongoose.Schema;

let ecomSchema = new Schema(
    {
        productId:{
            type: String,
            unique: true
        },
        productName:{
            type: String
        },
        productDescription:{
            type: String
        },
        productCategory:{
            type: String
        },
        productIsInCart:{
            type:Boolean,
            default:false
        },
        productDiscountPercentGiven:{
            type:Number,
            default:0
        },
        productAllowedForExchange:{
            type:Boolean,
            default:false
        },
        productWarrantyYears:{
            type:Number,
        },
        productManufacturedDate:{
            type:Date,
        },
        productDetailsAddedOn:{
            type:Date,
            default:Date.now
        }
    }
)

mongoose.model('EcomApp', ecomSchema);