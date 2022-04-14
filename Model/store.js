const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjecttId = Schema.ObjectId;
const storeSchema = new Schema({

// SCHEMA OF STORE

  storeName: {type: String, default:null,required:true},
  storePlace: {type: String, default: null, required: true},
  createdOn: {type: Date, default: Date.now()},
  createdBy: {type: ObjecttId, default: null},
  updatedOn: {type:String,default:Date.now()},
  updatedBy: {type:String,default:null},
  status: {type: String, default:null},
    
  });
  module.exports = mongoose.model('store', storeSchema);