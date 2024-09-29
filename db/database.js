var mongoose = require('mongoose');

url = 'mongodb://localhost:27017/order_products';

mongoose.connect(url).then(()=>{
console.log('mongodb connected successfully')
}).catch(()=>{
    console.log('mongodb not connected please check now')
})
module.exports=mongoose;
