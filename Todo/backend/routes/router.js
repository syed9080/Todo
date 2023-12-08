const express = require('express')
const router = express.Router()

const Register = require('../schema/schema') 
const Todo=require('../schema/Todo')


// This code is for add the data to mongodb
router.post('/add-user', async(req,res) => {
    const userRegister = new Register(req.body)
    try{
        await userRegister.save()
        console.log(userRegister)
        res.status(201).json({
            status: 'Success',
            data : {
                message:"user added successfully"  
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})








// this code is for adding the todo
router.post('/add-todo', async(req,res) => {
  const addtodo = new Todo(req.body)
  try{
      await addtodo.save()
      console.log(addtodo)
      res.status(201).json({
          status: 'Success',
          data : {
              message:"user added successfully"  
          }
      })
  }catch(err){
      res.status(500).json({
          status: 'Failed',
          message : err
      })
  }
})



// this code for update the details in mongodb

router.patch('/update-phone', async (req,res) => {
    const id=req.body.id
    const phone=req.body.phone

    //ithula first id vantu nee entha id ya update panna pora
    // next set la kuduthurukathu vanthu nee ennanu update pannanum
    // for ex:raj id was 2 you want to change raj to rajkumar using id :2
   await PhoneBook.updateOne({id:id},{$set:{"phone":phone}})

    try{
        console.log(id)
        res.status(200).json({
            status : 'Success',
            data : {
              message:"updated successfully"
            }
          })
    }catch(err){
        console.log(err)
    }
})

// this code is for delete

router.delete('/delete-phone', async(req,res) => {
    const id=req.body.id
    await PhoneBook.deleteOne({id:id})
    
    try{
    
      res.status(204).json({
          status : 'Success',
          data : {
            message:"deleted success"
          }
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})


// this code is for read from the database

// Assuming the URL is /get-phone
router.get('/check-user', async (req, res) => {
    const { email,password } = req.query;

    try {
      // Use the name parameter to query the database
      const user= await Register.find({ email: email });
      console.log(user)
      const value=user[0]._id.toString()
      console.log(value)
      if(user[0].password == password)
      {
      res.status(200).json({
        status: 'Success',
        data: {
          user,
        },
      });
      }
      else{
        console.log('password mismatch')
      }
    } catch (err) {
      console.log("failed")
      res.status(500).json({
        status: 'Failed',
        message: err.message,
      });
    }
  });
  

module.exports=router