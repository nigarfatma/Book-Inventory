const product=require("../Model/store")

// LOGIC OF STORE
exports.storeList=async(req,res,next)=>{
    const storeList=await product.find({})
    res.send({
        isSuccess: true,
        message: "store list fetch successfully",
        data:storeList
    })
}

exports.storeAdd=async(req,res,next)=>{
    console.log("storeName-->",req.body.storeName);
    const {storeName,storePlace}=req.body;
    if(storeName || !storePlace){
        res.send({
            isSuccess: false,
            message: "Please provide all required fields",
        })
    }
    const objAdd={
        storeName:storeName,
        storePlace:storePlace,
        createdOn:new Date(),
        createsBy:null,
        updatedOn:new Date(),
        status:"N",
    }
    const createResponse=await product.create(objAdd);
    res.send({
        isSuccess: true,
        message: "Product successfully added",
    })
}