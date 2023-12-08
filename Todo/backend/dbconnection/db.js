const mongoose = require('mongoose')



// This part of the code is for database connectivity
mongoose.connect("mongodb+srv://syed:syed@cluster0.6ayf2zu.mongodb.net/TodoApp").then(() =>{
    console.log('Database connected..')
})
