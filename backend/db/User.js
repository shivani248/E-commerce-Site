const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("users" , userSchema);





// mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');