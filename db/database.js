var mongoose = require('mongoose');

url = 'mongodb+srv://jadhavramdas466:UoWFm2JcFOyqE5Cx@cluster0.3htr6.mongodb.net/nodejs-db';

mongoose.connect(url).then(()=>{
console.log('mongodb connected successfully')
}).catch(()=>{
    console.log('mongodb not connected please check now')
})
module.exports=mongoose;
