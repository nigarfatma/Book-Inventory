const user=require("../Model/book")

// LOGIC OF BOOK

exports.bookList=async(req,res,next)=>{
    const bookList=await user.find({})
    res.send({
        isSuccess: true,
        message: "book list fetch succeessly",
        data:bookList
    })
}
exports.bookAdd=async(req,res,next)=>{
    console.log("productName-->",req.body.productName);
    const {bookTitle,authors,Price,publishedDate,pageCount,categories,shortDescription, longDescription}=req.body;
    if(!bookTitle || !authors || !publishedDate|| !pageCount|| !categories || !shortDescription|| !longDescription){
        res.send({
            isSuccess: false,
            message: "Please provide all required fields",
        })
    }
    const objAdd={
        bookTitle:bookTitle,
        authors:authors,
        Price:Price,
        publishedDate:publishedDate,
        pageCount:pageCount,
        categories:categories,
    shortDescription:shortDescription,
    longDescription:longDescription,
        createdOn:new Date(),
        createsBy:null,
        updatedOn:new Date(),
        status:"N", 
    }
    const createResponse=await user.create(objAdd);
    res.send({
        isSuccess: true,
        message: "User successfully added",
    })
}
exports.bookUpdate=async(req,res,next)=>{
    const id=req.body.id;
    const objUpdate={};
    if(req.body.bookTitle){
        objUpdate.bookTitle=req.body.bookTitle
    }
    if(req.body. authors){
        objUpdate.authors=req.body. authors
    }
    if(req.body. Price){
        objUpdate.Price=req.body.Price
    }
    if(req.body. categories){
        objUpdate.categories=req.body.categories
    }
const updateResponse=await user.updateOne({_id:id},{$set:objUpdate});
console.log("updateResponse-->",updateResponse);
   res.send({
       isSuccess: true,
       message: "User successfully updated",
   })
}
exports.bookDelete=async(req,res,next)=>{
    const id=req.body.id;

const deleteResponse=await user.remove({_id:id});
console.log("deleteResponse-->",deleteResponse);
   res.send({
       isSuccess: true,
       message: "User successfully deleted",
   })
}