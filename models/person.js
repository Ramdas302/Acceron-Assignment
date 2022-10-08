var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PrsonSchema = new Schema({
    village_name:{type:String,required:true},
    gram_panchayat:{type:String,required:true},
    family_head:{type:String,required:true},
    contact:{type:String,required:true},
    age:{type:Number,required:true},
    business:{type:String,required:true},
    education:{type:String,required:true},
    total_family_member:{type:Number,required:true},
})
mongoose.model('person',PrsonSchema);