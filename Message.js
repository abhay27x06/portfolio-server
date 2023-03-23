const mongoose=require('mongoose');
const mesSchema=new mongoose.Schema({
    name: String,
    email: String,
    message: String
});
const mesModel=mongoose.model('message', mesSchema);
module.exports=mesModel;