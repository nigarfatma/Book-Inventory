const user=require("../Model/user")

exports.userList=async(req,res,next)=>{
    const userList=await user.find({})
    res.send({
        isSuccess: true,
        message: "user list fetch succeessly",
        data:userList
    })
}
exports.userAdd=async(req,res,next)=>{
    console.log("email-->",req.body.email);
    const {username,email,password,dob}=req.body;
    if(!username || !email || !password || !dob){
        res.send({
            isSuccess: false,
            message: "Please provide all required fields",
        })
    }
    const objAdd={
        username:username,
        email:email,
        password:password,
        dob:dob,
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
exports.userUpdate=async(req,res,next)=>{
    const id=req.body.id;
    const objUpdate={};
    if(req.body.username){
        objUpdate.username=req.body.username
    }
    if(req.body.email){
        objUpdate.email=req.body.email
    }
    if(req.body.dob){
        objUpdate.dob=req.body.dob
    }
    if(req.body.status){
        objUpdate.status=req.body.status
    }
const updateResponse=await user.updateOne({_id:id},{$set:objUpdate});
console.log("updateResponse-->",updateResponse);
   res.send({
       isSuccess: true,
       message: "User successfully updated",
   })
}
exports.userDelete=async(req,res,next)=>{
    const id=req.body.id;

const deleteResponse=await user.remove({_id:id});
console.log("deleteResponse-->",deleteResponse);
   res.send({
       isSuccess: true,
       message: "User successfully deleted",
   })
}
