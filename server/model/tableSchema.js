const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const tableSchema = new mongoose.Schema({
   cname: {
    type: String,
    required: true
  },
  cphone: {
    type: Number
  },
  milk: {
    type: String,
    required: [true, "enter milk"],
    enum: {
      values: ['buffalo','cow']
    }
  },
  liter: {
    type: Number,
    required: true
  },
 
  
  // tokens: [
  //   {
  //     token: {
  //       type: String,
  //       required: true,
  //     }
  //   }
  // ]
},{timestamps : true });

const Table = mongoose.model("Table", tableSchema);
module.exports = Table;