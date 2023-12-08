const mongoose = require('mongoose')



// This is the schema of our collection like what we did in mysql for table
const TodoSchema = new mongoose.Schema({
    
    id: {
        type : String,
        required : true
    },
    Todo :{
        type : mongoose.Schema.Types.Mixed,
        required : true
    }

})
const Todo = mongoose.model('Todo',TodoSchema)
module.exports = Todo