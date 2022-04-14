const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({

// SCHEMA OF BOOK

    bookTitle: {type:String, default:null, required:true},
    authors: {type:String, default:null, required:true},
    Price: {type:Number, default:null,required:true},
    publishedDate: {type:Date, default:null,required:true},
    pageCount: {type:Number, default:null,required:true},
    categories:{type:Number,required:true},
    shortDescription: {type:String, default:null,required:true},
    longDescription: {type:String, default:null,required:true},
    createdOn: {type:Date,default:Date.now()},
    createdBy: {type:String,default:null},
    updatedOn: {type:String,default:Date.now()},
    updatedBy: {type:String,default:null},
    status: {type:String,default:null},
    
  });
  module.exports = mongoose.model('book', bookSchema);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      