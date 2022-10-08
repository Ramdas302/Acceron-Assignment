const orderproductsModel = require('../src/api/order-product')
module.exports = app =>{
app.post('/add-orderproducts',(req,res)=>{
    orderproductsModel.addorderproducts(req,res)
})

app.post('/addpersondata',(req,res)=>{
    orderproductsModel.addpersondata(req,res);
})
}