const mongoose = require('mongoose');
var OrdrproductSchema = require('../../models/order_products');
var OrderproductModel = mongoose.model('order_products');
var PersonSchema = require('../../models/person');
var PersonModel = mongoose.model('person');

module.exports.addorderproducts=function(req,res){
    var OrderData = new OrderproductModel({
        products:req.body.products,
        total_amount:req.body.total_amount,
        discount:req.body.discount,
        taxes:req.body.taxes,
        subtotal:req.body.subtotal,
        shipping_charges:req.body.shipping_charges,
        address:req.body.address,
    });
    OrderData.save(function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).json({
          message: 'Bad Request'
        });
      } else {
        res.json({
          status: 200,
          data: result
        })
      }

    });
}


module.exports.addpersondata=function(req,res){
    var PersonData = new PersonModel({
        village_name:req.body.village_name,
        gram_panchayat:req.body.gram_panchayat,
        family_head:req.body.family_head,
        contact:req.body.contact,
        age:req.body.age,
        business:req.body.business,
        education:req.body.education,
        total_family_member:req.body.total_family_member
    });
    PersonData.save(function (err, result) {
      if (err) {
        console.error(err);
        return res.status(400).json({
          message: 'Bad Request'
        });
      } else {
        res.json({
          status: 200,
          data: result
        })
      }

    });
}
