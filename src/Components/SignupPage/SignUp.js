import React, { useState } from 'react'
import Login from '../LoginPage/Login'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./style1.css"

const SignUp = () => {


  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: "", mobileno: "", email: "", password: "", cpassword: ""
  })

  const usersignup = async (e) => {
    e.preventDefault();
    if (user.password === user.cpassword) {
      const data = await axios.post('/signup', {
        name: user.name,
        mobileno: user.mobileno,
        email: user.email,
        password: user.password,
      })

      if (data.status === 200) {
        alert(data.data.message);
        navigate('/login')
      } else {
        alert(data.data.message);
      }
    }
    else{
      alert("Password Not Matching");
    }

  }


  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
    e.preventDefault();
  }


  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div class="center">
        <h1>SignUp</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required name='name' value={user.name} onChange={handleInput} />

            <label>Name</label>
          </div>
          <div class="txt_field">
            <input type="text" required name='email' value={user.email} onChange={handleInput} />

            <label>Email</label>
          </div>
          <div class="txt_field">
            <input type="text" required name='mobileno' value={user.mobileno} onChange={handleInput} />

            <label>Phone no.</label>
          </div>
          <div class="txt_field">
            <input type="text" required name='password' value={user.password} onChange={handleInput} />

            <label>Password</label>
          </div>
          <div class="txt_field">
            <input type="password" required name='cpassword' value={user.cpassword} onChange={handleInput} />

            <label>Confirm Password</label>
          </div>
          <input type="submit" value="Create account" className="Create" onClick={usersignup} />
          <div class="login_link">
            already have account? <a href="Login" onClick={() => { <Login /> }}>Login</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp