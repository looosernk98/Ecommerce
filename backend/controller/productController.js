const { findById } = require("../models/productModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorHandler");

exports.createProduct = async (req, res, next) => {
//   const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
  });
};

exports.getAllProducts = (req, res,next) => {
    const products = await Product.find();
  res.status(200).json({
      success:true,
      products
  });
};

exports.updateProduct = async (req,res,next) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        useValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        product
    })
};

exports.deleteProduct=async(req,res,next)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    };

     await product.remove();

     res.status(200).json({
         success:true,
         message:"Product Deleted Successfully"
     })

}

exports.getProductDetails=async(req,res,next)=>{
  const product = await Product.findById(req.params.id);
  if(!product){
       next(new ErrorHandler('Product Not Found',404))
    };

    res.status(200).json({
        success:true,
        product
    })
}
