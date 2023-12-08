import React, { useState } from 'react';
import Axios from 'axios'

const Register = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState(0)
    const [password, setPassword] = useState(0)
    const register= () => {
        Axios.post('http://localhost:8080/add-user',
        {"name":name,
        "phone":phone,
        "email":email,
        "password":password})
      }


    return (
      <div className="container">
          <label htmlFor="">name: </label>
          <input type="text" onChange={(e) => {setName(e.target.value)}}/><br/><br/>
          <label htmlFor="">password: </label>
          <input type="text" onChange={(e) => {setPassword(e.target.value)}}/><br/><br/>
          <label htmlFor="">email: </label>
          <input type="text" onChange={(e) => {setEmail(e.target.value)}}/><br/><br/>
          <label htmlFor="">Phone number: </label>
          <input type="text" onChange={(e) => {setPhone(e.target.value)}}/><br/><br/>
          <button onClick={register}>Sign up</button>
      </div> 
    );
};

export default Register;

