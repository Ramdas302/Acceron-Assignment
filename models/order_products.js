var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderProductsSchema = new Schema({
    products:[{}],
    total_amount:{type:String,required:true},
    discount:{type:String,required:true},
    taxes:{type:String,required:true},
    subtotal:{type:String,required:true},
    shipping_charges:{type:String,required:true},
    address:{type:String,required:true},
})
mongoose.model('order_products',OrderProductsSchema);