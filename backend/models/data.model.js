const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  age: { type: Number, required: true, unique: true },
  displayName: { type: String ,required:true },
  hours:{type:String,required:true}
});

module.exports = Data = mongoose.model("data", dataSchema);

