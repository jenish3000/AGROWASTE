import React, { useState } from 'react'
import "./style.css"
import SignUp from '../SignupPage/SignUp'
import Forget from './Forget' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate()

  const [user,setuser] = useState({
    email:"", password:""
  })
  
  const userlogin = async (e) => {
    e.preventDefault();
    const data = await axios.post('/login', {
      email: user.email,
      password: user.password
    })
    if(data.data.user){
      alert(data.data.message);
      navigate('/')
    }else{
      alert(data.data.message);
    }
  }

  let name,value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({...user, [name]:value})
    e.preventDefault();
  }

  return (
    <>
      <div className="center">
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">  

          <input type="text" required name='email' value={user.email} onChange={handleInput}/>
          <label>Username</label>
        </div>
        <div className="txt_field"> 

          <input type="password" required name='password' value={user.password} onChange={handleInput}/>
          <label>Password</label>
        </div>
        <div className="pass"><a href="Forget" onClick={()=>{<Forget/>} } >Forget Password?</a></div>

             <input type="submit" value="Login" className="Login" onClick={userlogin}/>
        <div className="signup_link">
          Not a member? <a href="SignUp" onClick={()=>{<SignUp/>} } >Signup</a>
        </div>
      </form>
    </div>
    </>
  )
}

export default Login