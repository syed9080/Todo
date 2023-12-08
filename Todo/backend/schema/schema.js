const mongoose = require('mongoose')



// This is the schema of our collection like what we did in mysql for table
const RegisterSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    password :
    {
        type : Number,
        required : true
    }

})
const Register = mongoose.model('Register',RegisterSchema)
module.exports = Register